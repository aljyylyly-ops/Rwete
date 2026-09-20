importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBmKumbv8I1WduHEuDwoux8XiXSRfkUQ4k",
  authDomain: "husaini-store.firebaseapp.com",
  databaseURL: "https://husaini-store-default-rtdb.firebaseio.com/",
  projectId: "husaini-store",
  storageBucket: "husaini-store.firebasestorage.app",
  messagingSenderId: "923069453797"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  return self.registration.showNotification("🛍️ سوق الصويرة", {
    title: payload.notification?.title || "✨ منتج جديد!",
    body: payload.notification?.body || "تم إضافة منتج جديد تفضل اطلع عليه",
    icon: "https://i.imgur.com/kvHRLDz.png"
  });
});
