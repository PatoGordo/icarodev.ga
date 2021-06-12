<template>
  <section id="contacts">
    <h2 class="section-title">Contacts</h2>

    <div class="contacts-methods">
      <div class="others">
        <a href="https://linkedin.com/in/icaro-miguel-0879521bb/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
        <a href="https://t.me/PatoGordo" target="_blank"><i class="fab fa-telegram-plane"></i></a>
        <a href="mailto:conversecomicaro@gmail.com" target="_blank"><ion-icon name="mail-outline"></ion-icon></a>
      </div>

      <form @submit.prevent="addContact()" class="form">
        <h2>Contact me through this form</h2>
        <div class="input-field">
          <label class="only-screen-reader" for="name">Your name</label>
          <input id="name" v-model="contact.name" type="text" placeholder="Your name..." required />
        </div>

        <div class="input-field">
          <label class="only-screen-reader" for="email">Your email</label>
          <input id="email" v-model="contact.email" type="email" placeholder="Your email..." required />
        </div>

        <div class="input-field">
          <label class="only-screen-reader" for="message">Your message</label>
          <textarea id="message" v-model="contact.message" cols="30" rows="8" placeholder="Your message..." required></textarea>
        </div>

        <button class="form-submit" type="submit" :disabled="submitButtonDisabled">Send message</button>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { db } from '../firebase'
import emailjs from 'emailjs-com'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

(function() {
  emailjs.init("user_F1zjT6pQNovfefUOkGFC1")
})()

interface DataTypes {
  submitButtonDisabled: boolean,
  contact: {
    id: string;
    name: string;
    email: string;
    message: string;
  }
}

export default defineComponent({
  name: 'Contacts',
  data(): DataTypes {
    return {
      submitButtonDisabled: false,
      contact: {
        id: '',
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    addContact() {
      this.contact.id =  '#'+Math.floor(1000 + Math.random() * 9000)

      this.submitButtonDisabled = true
      
      emailjs.send('service_enfl7lo', 'template_a4eufer', this.contact)
      .then(() => {}, (error) => {
        console.log('[EMAILJS ERROR]: ', error)
      })

      db.collection('test').doc(this.contact.email + ' ' + this.contact.id).set(this.contact)
        .then(() => {
          alert('Message sent with success!')
          this.contact.name = ''
          this.contact.email = ''
          this.contact.message = ''
          this.submitButtonDisabled = false
        })
        .catch((error) => {
          alert('error: '+ error)
          this.submitButtonDisabled = false
        })
    }
  }
})
</script>

<style lang="scss" scoped>
  section {
    text-align: center;
    margin-bottom: 75px;
  }
  .section-title {
    font-size: 2.1rem;
    margin: 40px 0 5px 0;
  }
  .contacts-methods {
    display: grid;
    place-items: center;
  }
  .others {
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    a {
      display: grid;
      place-items: center;
      color: #fff;
      margin: 0 6px;
      padding: 10px;
      height: 52px;
      width: 52px;
      border-radius: 50%;
      object-fit: cover;
      font-size: 2rem;
      background: #30323e;
    }
  }
  .form {
    width: min(420px, 95%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  .input-field {
    display: grid;
    place-items: center;
    margin: 5px;
  }
  .input-field, .input-field input, .input-field textarea {
    width: 100%;
  }
  .input-field {
    input {
      height: 35px;
      padding: 8px 14px;
      font-size: 16px;
      background: #30323e;
      color: #fff;
      border: 0;
      border-radius: .40rem;
    }
    textarea {
      padding: 8px 14px;
      resize: none;
      font-size: 16px;
      background: #30323e;
      color: #fff;
      border: 0;
      border-radius: .30rem;
    }
  }
  .input-field input:focus, .input-field textarea:focus {
    background: #3a3c49;
    transition: all ease .3s;
  }
  .form-submit {
    align-self: start;
    margin: 5px 0;
    background: #0057e7;
    color: #fff;
    font-size: 16px;
    border: 0;
    border-radius: .30rem;
    padding: 8px 14px;
    cursor: pointer;
    transition: all ease .3s;
    &:hover {
      background: #004ecf;
      transition: all ease .3s;
    }
    &:disabled {
      background: #004ecf;
      cursor: not-allowed;
    }
  }
</style>