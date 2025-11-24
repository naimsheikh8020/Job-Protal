import { Webhook } from "svix";
import User from "../models/User.js";

const clerkWebhooks = async (req, res) => {
    try {
        // Clerk Webhook verifier
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        // Payload must be RAW (Buffer)
        const payload = req.body.toString("utf8");

        // Verify the webhook
        await whook.verify(payload, {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        });

        // Parse the JSON payload
        const { data, type } = JSON.parse(payload);

        switch (type) {
            case "user.created": {
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: `${data.first_name} ${data.last_name}`,
                    image: data.profile_image_url,
                    resume: ""
                };

                await User.create(userData);
                return res.json({ message: "User Created" });
            }

            case "user.updated": {
                const userData = {
                    email: data.email_addresses[0].email_address,
                    name: `${data.first_name} ${data.last_name}`,
                    image: data.profile_image_url
                };

                await User.findByIdAndUpdate(data.id, userData);
                return res.json({ message: "User Updated" });
            }

            case "user.deleted": {
                await User.findByIdAndDelete(data.id);
                return res.json({ message: "User Deleted" });
            }

            default:
                return res.json({ message: "Unhandled Event" });
        }
    } catch (error) {
        console.error("Error handling Clerk webhook:", error);
        return res.status(400).send("Invalid Webhook Signature");
    }
};

export { clerkWebhooks };
