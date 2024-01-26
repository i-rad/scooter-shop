export default function Features() {
  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">The Ultimate Outdoor Adventure Tool</h2>
            <p className="text-xl text-gray-400">Our scooters are made from high-quality materials that are built to last, so you can trust that they will stand up to even the most adventurous rides. They feature adjustable handlebars, so they can grow with your child and provide years of enjoyment. And with bright, bold colors and cool designs, your child will be the envy of all their friends on the playground or neighborhood streets.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 rounded-full border-2 border-purple-600" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-transparent" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2">Adjustable Handlebars</h4>
              <p className="text-lg text-gray-400 text-center">Our scooters come with adjustable handlebars that allow the scooter to grow with the child. This means that the scooter can accommodate a growing child over several years, providing long-lasting value.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 rounded-full border-2 border-purple-600" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-transparent" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
              <h4 className="h4 mb-2">Lightweight Design</h4>
              <p className="text-lg text-gray-400 text-center">Our scooters are lightweight and compact, making them easy to carry and transport. Some models may also fold up for added portability.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 rounded-full border-2 border-purple-600" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-transparent" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Wide Deck</h4>
              <p className="text-lg text-gray-400 text-center">The deck of a our scooter is wider than that of an adult scooter, which makes it easier for young riders to maintain their balance and stability.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 rounded-full border-2 border-purple-600" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-transparent" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Three-Wheel Design</h4>
              <p className="text-lg text-gray-400 text-center">Our scooters have three wheels - two in the front and one in the back - to enhance stability and ease of use. This design allows younger riders to focus on learning how to balance without worrying about falling over</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 rounded-full border-2 border-purple-600" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-transparent" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Rear Brake</h4>
              <p className="text-lg text-gray-400 text-center">Our scooters include a rear brake that is activated by pressing down on the back fender with the foot. This simple and intuitive braking system ensures that kids can stop safely and easily.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4 rounded-full border-2 border-purple-600" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-transparent" width="64" height="64" rx="32" />
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Bright Colors and Decals</h4>
              <p className="text-lg text-gray-400 text-center">Scooters come in bright, eye-catching colors and patterns. Some models may even include decals featuring popular characters or themes. These colorful designs not only look great but also help increase visibility and safety during outdoor play.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
