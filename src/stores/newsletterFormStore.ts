import { defineStore } from "pinia";

export const useNewsletterFormStore = defineStore("newsletterForm", {
  state: () => ({
    isLoading: false,
    full_name: "", // User's full name
    email: "", // User's email
  }),
  actions: {
    setFormData({ full_name, email }: { full_name: string; email: string }) {
      this.full_name = full_name;
      this.email = email;
    },
    async submitForm() {
      this.isLoading = true;
      try {
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form submitted:", {
          full_name: this.full_name,
          email: this.email,
        });
      } catch (error) {
        console.error("Form submission failed:", error);
        throw new Error("Form submission failed");
      } finally {
        this.isLoading = false;
      }
    },
  },
});
