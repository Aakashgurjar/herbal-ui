

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    allowedHosts: ['e72cbe4b39f9.ngrok-free.app']
    
  },
})



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],

//   server: {
//     // allowedHosts: [
//     //   '0505-103-241-82-155.ngrok-free.app'
//     // ]
   
//     allowedHosts: ['97a6b18d90ba.ngrok-free.app']

//   }
// })

