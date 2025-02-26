import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../config/email";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        emailConfig.publicKey
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Me Contacter</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full btn btn-primary ${
                status === "loading" ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Envoi..." : "Envoyer"}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center">
                Message envoyé avec succès !
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center">
                Une erreur est survenue. Veuillez réessayer.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
