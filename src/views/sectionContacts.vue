<template>
  <section>
    <h2>Contact Me</h2>
    <div class="contacts-container">
      <div class="contact-container">
        <h3>Contact Form</h3>
        <form @submit.prevent="handleSubmit">
          <label for="name" osr>Your name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            v-model="contact.name"
            required
          />

          <label for="email" osr>Your email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            v-model="contact.email"
            required
          />

          <label for="message" osr>Your message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            v-model="contact.message"
            required
          ></textarea>

          <button type="submit" :disabled="isSanding">{{ buttonText }}</button>
        </form>
      </div>
      <div class="contact-container other-contacts">
        <h3>Other Contacts</h3>
        <div>
          <a
            href="https://t.me/PatoGordo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <icon icon="bx:bxl-telegram" />
            Contact me using Telegram
          </a>
          <a
            href="https://linkedin.com/in/icaro-miguel-0879521bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <icon icon="akar-icons:linkedin-fill" />
            Contact me using Linkedin
          </a>
          <a
            href="mailto:conversecomicaro@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <icon icon="akar-icons:envelope" />
            Send me a Email
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { reactive, ref } from "vue";
import axios from "axios";
import emailjs from "emailjs-com";

const isSanding = ref(false);
const buttonText = ref("Send Contact");

const contact = reactive({
  name: "",
  email: "",
  message: "",
});

async function handleSubmit() {
  if (
    !contact.name ||
    contact.name.trim() === "" ||
    !contact.email ||
    contact.email.trim() === "" ||
    !contact.message ||
    contact.message.trim() === ""
  ) {
    return;
  }

  isSanding.value = true;
  buttonText.value = "Sending...";

  emailjs
    .send("service_enfl7lo", "template_a4eufer", contact)
    .then(() => {})
    .catch((err) => {
      console.log(`[EMAILJS ERROR]: ${err}`);
    });

  try {
    const res = await axios.post(
      "https://contact-me-api.vercel.app/contacts/set",
      contact
    );

    const { data } = res;

    contact.name = "";
    contact.email = "";
    contact.message = "";

    alert(data.message);

    isSanding.value = false;
    buttonText.value = "Send Contact";
  } catch (err) {
    alert(err);
    isSanding.value = false;
  }
}
</script>

<style lang="scss" scoped>
section {
  margin-top: 32px;
  h2 {
    margin-bottom: 16px;
  }
  .contacts-container {
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    .contact-container {
      min-width: 345px;
      max-width: 345px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 16px;
      background: #2d333b;
      border-radius: 10px;
      &.other-contacts {
        justify-content: start;
      }
      h3 {
        font-weight: 400;
        text-align: center;
        color: #fff;
      }
      form,
      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        a {
          padding: 16px;
          width: 100%;
          border-radius: 10px;
          display: flex;
          justify-content: start;
          align-items: center;
          text-align: start;
          gap: 8px;
          color: #fff;
          background: #444c56;
          text-decoration: none;
          svg {
            width: 32px;
            height: 32px;
          }
        }
        input,
        textarea,
        button {
          width: 100%;
          padding: 8px;
          border-radius: 8px;
          background: #444c56;
          color: #fff;
          border: 0;
          resize: vertical;
          outline: none;
          &::placeholder {
            color: #c7c7c7;
          }
        }
        textarea {
          min-height: 120px;
        }
        button {
          margin-top: 8px;
          cursor: pointer;
          background: #0075ff;
          color: #fff;
          &:disabled {
            filter: brightness(0.8);
            cursor: not-allowed;
          }
        }
      }
    }
  }
}
</style>
