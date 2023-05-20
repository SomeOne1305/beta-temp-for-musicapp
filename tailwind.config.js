/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'./node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        start: "#1B0424",
        end: "#04011C",
        blueC:"#0501FA",
        pinkC:"#E01E5A",
        purpleC:"#5D0CB9",
        primary:'#101012'
      },
      dropShadow:{
        '3xl':"0px 0px 3px cyan"
      }
    },
    container:{
      center:true,
      screens:{
        xs:"100%",
        sm: "540px",
        md: "728px",
        lg: "964px",
        xl: "1140px",
        '2xl': "1320px"
      }
    },
    backgroundImage:{
      'image-bg':'url("http://images.ctfassets.net/hrltx12pl8hq/5gXfUPMGQ8BoX9dLx3iiCI/ce8cf48637750183dc3729791a0d2a0d/Desktop-Background_Bannerjpg.jpg?fit=fill&w=2560&h=400&fm=webp")',
      'image-bg-2':'url("https://images.ctfassets.net/hrltx12pl8hq/6DyfMDxHPYWSnBMPqyveTG/6781a7181fc7b09f8df9013ccdab2cbc/hero-static-2.png?fit=fill&w=1024&h=400&fm=webp")',
      'primary-gr':'linear-gradient(to left, #c31432, #240b36);',
      'primary-gr-ch':'linear-gradient(to right, #4a569d,#dc2424);',
      'logo':"linear-gradient(to right, #fc4a1a, #f7b733);"
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}