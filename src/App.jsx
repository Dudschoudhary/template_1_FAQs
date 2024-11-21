import React from 'react'
import star_img from '../src/assets/images/icon-star.svg'
function App() {

  return (
    <>
      <div className='main h-screen bg-gray-500 relative '>
        <div className=' w-full h-[300px] bg-red-600 bg-[url("../src/assets/images/background-pattern-mobile.svg")] sm:bg-[url("../src/assets/images/background-pattern-desktop.svg")] bg-cover bg-no-repeat'>
        </div>
        <div className='w-full h-[500px] bg-[#f9eeff]'></div>

      </div>
      <div className='w-full absolute top-32'>
        <div className='w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[45%] m-auto  p-5 rounded-2xl bg-white'>
          <section class="">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div class="flex  items-center  gap-4 py-4">
                <img src={star_img} alt="star image" />
                <h1 className='text-3xl WorkSans-VariableFont_wght'>FAQs</h1>
              </div>
              <div class="accordion-group" data-accordion="default-accordion">
                <div
                  class="accordion  p-4 rounded-xl transition duration-500 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4 active"
                  id="basic-heading-one-with-icon"
                >
                  <button
                    class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                    aria-controls="basic-collapse-one-with-icon"
                  >
                    <h5 className="text-sm sm:text-base ld:text-lg ">How can I reset my password?</h5>
                    <svg
                      class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600 origin-center"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18M12 18V6"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <svg
                      class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-one-with-icon"
                    class="accordion-content w-full overflow-hidden pr-4"
                    aria-labelledby="basic-heading-one"

                  >
                    <p class="text-base text-gray-900 font-normal leading-6">
                      {/* To create an account, find the 'Sign up' or 'Create account'
                        button. */}
                    </p>
                  </div>
                </div>
                <div
                  class="accordion  p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
                  id="basic-heading-two-with-icon"
                >
                  <button
                    class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                    aria-controls="basic-collapse-two-with-icon"
                  >
                    <h5 className="text-sm sm:text-base ld:text-lg ">How do I update my billing information?</h5>
                    <svg
                      class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18M12 18V6"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <svg
                      class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-two-with-icon"
                    class="accordion-content w-full overflow-hidden pr-4"
                    aria-labelledby="basic-heading-two"
                  >
                    <p class="text-base text-gray-900 font-normal leading-6">
                      {/* To create an account, find the 'Sign up' or 'Create account'
                        button. */}
                    </p>
                  </div>
                </div>
                <div
                  class="accordion  p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
                  id="basic-heading-three-with-icon"
                >
                  <button
                    class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                    aria-controls="basic-collapse-three-with-icon"
                  >
                    <h5 className="text-sm sm:text-base lg:text-lg ">How can I contact customer support?</h5>
                    <svg
                      class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18M12 18V6"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <svg
                      class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-three-with-icon"
                    class="accordion-content w-full overflow-hidden pr-4"
                    aria-labelledby="basic-heading-three"
                  >
                    <p class="text-base text-gray-900 font-normal leading-6">
                      {/* To create an account, find the 'Sign up' or 'Create account'
                        button. */}
                    </p>
                  </div>
                </div>
                <div
                  class="accordion  p-4 rounded-xl accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
                  id="basic-heading-three-with-icon"
                >
                  <button
                    class="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                    aria-controls="basic-collapse-three-with-icon"
                  >
                    <h5 className="text-sm sm:text-base ld:text-lg ">How do I delete my account?</h5>
                    <svg
                      class="w-6 h-6 text-gray-900 transition duration-500 block accordion-active:text-indigo-600 accordion-active:hidden group-hover:text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18M12 18V6"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <svg
                      class="w-6 h-6 text-gray-900 transition duration-500 hidden accordion-active:text-indigo-600 accordion-active:block group-hover:text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-three-with-icon"
                    class="accordion-content w-full overflow-hidden pr-4"
                    aria-labelledby="basic-heading-three"

                  >
                    <p class="text-base text-gray-900 font-normal leading-6">
                      {/* To create an account. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
