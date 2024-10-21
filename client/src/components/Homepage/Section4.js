// import React from 'react';

// export default function Section4() {
//   return (
//     <div className="bg-[#F2F2F2] h-auto">
//       <div className="text-center">
//         <div className="flex flex-col mt-12 px-4 py-8">
//           <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#703893] to-[#3f4195]  bg-clip-text text-transparent animate-fade-up animate-once animate-ease-in">
//             Custom-Fit for Every Sector
//           </h2>
//           <p className="text-2xl mb-2 text-black animate-fade-up animate-once animate-ease-in">
//           Trustopay bridges payment gaps across industries from fintech to second-hand goods.
             

//           </p>
//           <p className="text-2xl text-black animate-fade-up animate-once animate-ease-in">
//           Our solutions address your unique industry needs, delivering secure and seamless transactions.
//           </p>
//         </div>
//       </div>

//       <div className="mx-auto flex justify-center gap-24 items-center flex-wrap mt-12">
//         <div className="grid grid-cols-3 gap-6 mb-12">
//           {[
//             { title: 'Fintech', p1: 'Secures digital transactions and prevents fraud.', imgSrc: 'https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/664c18ee5ec4dc64f5867d95_travel-hero-image-p-800.webp' },
//             { title: 'Ecommerce', p1: 'Smooth, secure payments with escrow protection.', imgSrc: 'https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6653c7146067bfa4a450c44a_img_hero_gaming.webp' },
//             { title: 'IT Agencies', p1: 'Reliable payments and project management.', imgSrc: 'https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/665fd296317531c068364cc8_img_saas-hero-image-p-800.webp' },
//             { title: 'Digital Marketing', p1: 'Easy payment collection and financial tracking.', imgSrc: 'https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6687e1871d4ae1461b838b0c_img_hero-fintech.webp' },
//             { title: 'Freelancers', p1: ' milestone-based payments and reduced delays.', imgSrc: 'https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/665fd296317531c068364cc8_img_saas-hero-image-p-800.webp' },
//             { title: 'Second-hand Goods', p1: 'Trusted transactions for pre-owned items.',  imgSrc: 'https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6684dbd4df6d281e89579cdb_img_digitalproducts-hero-image-p-500.webp' }
//           ].map((member) => (
//             <div key={member.title} className="relative  group w-[340px] h-[420px] overflow-hidden rounded-xl shadow-lg cursor-pointer animate-fade-up animate-once animate-ease-in ">
//               {/* Background Image */}
//               <div className="absolute rounded-xl inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out scale-100 group-hover:scale-105"
//                 style={{ backgroundImage: `url(${member.imgSrc})` }} />

//               {/* Initial Color Overlay */}
//               <div className="absolute inset-0 bg-[#273C43] opacity-60 transition-opacity duration-300 ease-in-out group-hover:opacity-0" />

//               {/* Header Title */}
//               <h2 className='absolute  text-white font-bold text-2xl top-0 left-0 w-full p-6 flex flex-col justify-end z-10 opacity-100 transform origin-left duration-300 ease-in-out group-hover:scale-150'>
//                 {member.title}
//               </h2>

//               {/* Description text (initially visible with slight overlay) */}
//               <div className='text-white text-xl font-semibold absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end z-10 opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100'>
//                 <p className="text-white text-2xl">{member.p1}</p>
//                 {/* <p className="text-white">{member.p2}</p> */}
//                 {/* <p className="text-white">{member.p3}</p> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




import React from 'react';

export default function Section4() {
  return (
    <div className="bg-gradient-to-r from-[#703893] to-[#3f4195] h-auto hidden md:block  max-w-full overflow-hidden">
      <div className="text-center">
        <div className="flex flex-col text-left md:text-center mt-12 px-4 py-8">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#703893] to-[#3f4195] bg-clip-text text-white animate-fade-up animate-once animate-ease-in">
            Custom-Fit for Every Sector
          </h2>
          <div className=' space-y-2 mt-2 md:space-y-0 '>
          <p className="text-2xl mb-2 text-white animate-fade-up animate-once animate-ease-in">
            Trustopay bridges payment gaps across industries from fintech to second-hand goods.
          </p>
          <p className="text-2xl text-white animate-fade-up animate-once animate-ease-in">
            Our solutions address your unique industry needs, delivering secure and seamless transactions.
          </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex justify-center gap-24 items-center flex-wrap mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Fintech */}
          <div className="relative group w-[340px] h-[420px] overflow-hidden rounded-xl shadow-lg cursor-pointer animate-fade-up animate-once animate-ease-in transition-all duration-500 hover:scale-105">
  {/* Background image */}
  <div 
    className="absolute rounded-xl inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out scale-100 group-hover:scale-125" 
    style={{ backgroundImage: `url(https://images.pexels.com/photos/7621131/pexels-photo-7621131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)` }} 
  />

  {/* Overlay layer with reduced opacity on hover */}
  {/* <div className="absolute inset-0 bg-[#273C43] opacity-40 group-hover:opacity-40 transition-opacity duration-300" /> */}
  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" />

  {/* Title */}
  <h2 className="text-white font-bold text-2xl top-0 left-0 w-full p-6 flex flex-col justify-end z-10 opacity-100 transform origin-left duration-300 ease-in-out group-hover:scale-150">
    Fintech
  </h2>

  {/* Description that fades in on hover */}
  <div className='text-white text-xl font-semibold absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end z-10 opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100'>
    <p>Secures digital transactions and prevents fraud.</p>
  </div>
</div>


          {/* Ecommerce */}
<div className="relative group w-[340px] h-[420px] overflow-hidden rounded-xl shadow-lg cursor-pointer animate-fade-up animate-once animate-ease-in transition-all duration-700 hover:rotate-3">
  {/* Background Image */}
  <div
    className="absolute rounded-xl inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out scale-100 group-hover:scale-125"
    style={{
      backgroundImage: `url(https://imgs.search.brave.com/4G3b9VbyvaHp5kH2XYAvX1ACsw7XVa5iuFSIYPu9nQA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/NjA0MDMzMi9waG90/by9zaG9wcGluZy1v/bmxpbmUtd2l0aC1w/aG9uZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9ZjZzY0NU/TWp4MVIyZ1lJQmpW/alZhcFVSb2xNQjJp/VVhNZkc0SWNqSDN4/cz0)`,
    }}
  />
  
  {/* Black Overlay that changes on hover */}
  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" />

  {/* Heading */}
  <h2 className="text-white font-bold text-2xl top-0 left-0 w-full p-6 flex flex-col justify-end z-10 opacity-100 transform origin-left duration-300 ease-in-out group-hover:scale-150">
    Ecommerce
  </h2>

  {/* Text content */}
  <div className="text-white text-xl font-semibold absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end z-10 opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
    <p>Smooth, secure payments with escrow protection.</p>
  </div>
</div>


          {/* IT Agencies */}
          <div className="relative group w-[340px] h-[420px] overflow-hidden rounded-xl shadow-lg cursor-pointer animate-fade-up animate-once animate-ease-in transition-all duration-500 hover:translate-y-2">
            <div className="absolute rounded-xl inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out scale-100 group-hover:scale-105 grayscale group-hover:grayscale-0" style={{ backgroundImage: `url(https://imgs.search.brave.com/bk97Tm631KSmWLZWEeTKr0UB5-3WPoX_4VqC-rVmsdg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cm91cC1hc2lhLXlv/dW5nLWNyZWF0aXZl/LXBlb3BsZS1zbWFy/dC1jYXN1YWwtd2Vh/ci1kaXNjdXNzaW5n/LWJ1c2luZXNzLWJy/YWluc3Rvcm1pbmdf/Nzg2MS0zMDY2Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn )` }} />
            {/* <div className="absolute inset-0 bg-[#273C43] opacity-60 group-hover:opacity-0" /> */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" />
            <h2 className="text-white font-bold text-2xl top-0 left-0 w-full p-6 flex flex-col justify-end z-10 opacity-100 transform origin-left duration-300 ease-in-out group-hover:scale-150">IT Agencies</h2>
            <div className="text-white text-xl font-semibold absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end z-10 opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
              <p>Reliable payments and project management.</p>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="relative group w-[340px] h-[420px] overflow-hidden rounded-xl shadow-lg cursor-pointer animate-fade-up animate-once animate-ease-in transition-all duration-500 hover:scale-110">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out scale-105 group-hover:scale-100" style={{ backgroundImage: `url(https://imgs.search.brave.com/_1XqhBgXWOv3Zgoy_jez1KOVtvHKekhK4qCLqpfrCTY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/NDU5MTYxNC9waG90/by9tYW4tdXNpbmct/ZGlnaXRhbC10YWJs/ZXQtb25saW5lLWNv/bm5lY3QtdG8taW50/ZXJuZXQtYmFua2lu/Zy1jdXJyZW5jeS1l/eGNoYW5nZS1vbmxp/bmUtc2hvcHBpbmcu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW5lakE1U3VIY04y/ZkFkTzdCa2FmOXBK/cnd6eUxQQkN5T0xa/Z01hc2xHa289)` }} />
            {/* <div className="absolute inset-0 bg-[#273C43] opacity-60 group-hover:opacity-0" /> */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" />
            <h2 className="text-white font-bold text-2xl top-0 left-0 w-full p-6 flex flex-col justify-end z-10 opacity-100 transform origin-left duration-300 ease-in-out group-hover:scale-125  ">Digital Marketing</h2>
            <div className="text-white text-xl font-semibold absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end z-10 opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
              <p>Easy payment collection and financial tracking.</p>
            </div>
          </div>

          {/* Freelancers */}
          <div className="relative group w-[340px] h-[420px] overflow-hidden rounded-xl shadow-lg cursor-pointer animate-fade-up animate-once animate-ease-in transition-all duration-500 hover:rotate-6">
            <div className="absolute rounded-xl inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out scale-100 group-hover:scale-125" style={{ backgroundImage: `url(https://imgs.search.brave.com/_saHVg_J2dWGmOSX0rnBgZZ8oBlznpHJunhDgomJ47Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzA0LzMyLzIy/LzM2MF9GXzgwNDMy/MjI5MV9kQ1dvQ0ZW/T29tTW9zeW1uemdD/SkdnQWR3aGpQOEJK/Qy5qcGc)` }} />
            {/* <div className="absolute inset-0 bg-[#273C43] opacity-60 group-hover:opacity-0" /> */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" />
            <h2 className="text-white font-bold text-2xl top-0 left-0 w-full p-6 flex flex-col justify-end z-10 opacity-100 transform origin-left duration-300 ease-in-out group-hover:scale-150">Freelancers</h2>
            <div className="text-white text-xl font-semibold absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end z-10 opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
              <p>Milestone-based payments and reduced delays.</p>
            </div>
          </div>

          {/* Second-hand Goods */}
          <div className="relative group w-[340px] h-[420px] overflow-hidden rounded-xl shadow-lg cursor-pointer animate-fade-up animate-once animate-ease-in transition-all duration-500 hover:scale-105">
          <div className="absolute rounded-xl inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out scale-105 grayscale group-hover:-translate-x-4 group-hover:scale-125 group-hover:grayscale-0" style={{ 
          backgroundImage: `url(https://cdn.prod.website-files.com/6598f4892384e3889d845a2d/6684dbd4df6d281e89579cdb_img_digitalproducts-hero-image-p-500.webp)` }}/>            
          {/* <div className="absolute inset-0 bg-[#273C43] opacity-60 group-hover:opacity-0" /> */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out" />

            <h2 className="text-white font-bold text-2xl top-0 left-0 w-full p-6 flex flex-col justify-end z-10 opacity-100 transform origin-left duration-300 ease-in-out group-hover:scale-125">Second-hand Goods</h2>
            <div className="text-white text-xl font-semibold absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end z-10 opacity-0 transform scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
              <p>Trusted transactions for pre-owned items.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
