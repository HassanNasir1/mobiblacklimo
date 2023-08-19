export default function Form1() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-0">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            <form className="px-4 pb-36 pt-16 sm:px-6 lg:col-start-1 lg:row-start-1 lg:px-0 lg:pb-16">
              <div className="mx-auto max-w-lg lg:max-w-none">
                <section aria-labelledby="contact-info-heading">
                  <h2
                    id="contact-info-heading"
                    className="text-lg font-medium text-gray-900 mb-4 text-center"
                  >
                    <span className="block text-4xl pb-4 font-semibold text-blue-500 leading-tight mb-2">
                      Contact Information
                    </span>
                  </h2>

                  {/* Contact Person Name */}
                  <div className="mt-6">
                    <label
                      htmlFor="contact-person-name"
                      className="block text-md font-medium text-gray-700"
                    >
                      Contact Person Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="contact-person-name"
                        name="contact-person-name"
                        autoComplete=""
                        className="block w-full rounded-md bg-white text-black border-gray-300 border border-solid shadow-sm focus:border-blue-300 focus-visible:outline-blue-300 focus:ring-blue-300 sm:text-lg"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mt-6">
                    <label
                      htmlFor="email-address"
                      className="block text-md font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email-address"
                        name="email-address"
                        autoComplete="email"
                        className="block w-full rounded-md bg-white text-black border-gray-300 border border-solid shadow-sm focus:border-gray-300 focus-visible:outline-orange-300 focus:ring-gray-300 sm:text-lg"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="mt-6">
                    <label
                      htmlFor="phone-number"
                      className="block text-md font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        id="phone-number"
                        name="phone-number"
                        autoComplete="tel"
                        className="block w-full rounded-md bg-white text-black border-gray-300 border border-solid shadow-sm focus:border-gray-300 focus-visible:outline-orange-300 focus:ring-gray-300 sm:text-lg"
                      />
                    </div>
                  </div>

                  {/* Pickup Location */}
                  <div className="mt-6">
                    <label
                      htmlFor="pickup-location"
                      className="block text-md font-medium text-gray-700"
                    >
                      Pickup Location
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="pickup-location"
                        name="pickup-location"
                        autoComplete=""
                        className="block w-full rounded-md bg-white text-black border-gray-300 border border-solid shadow-sm focus:border-gray-300 focus-visible:outline-orange-300 focus:ring-gray-300 sm:text-lg"
                      />
                    </div>
                  </div>

                  {/* Drop-off Location */}
                  <div className="mt-6">
                    <label
                      htmlFor="dropoff-location"
                      className="block text-md font-medium text-gray-700"
                    >
                      Drop-off Location
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="dropoff-location"
                        name="dropoff-location"
                        autoComplete=""
                        className="block w-full rounded-md bg-white text-black border-gray-300 border border-solid shadow-sm focus:border-gray-300 focus-visible:outline-orange-300 focus:ring-gray-300 sm:text-lg"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="mt-6">
                    <label
                      htmlFor="additional-information"
                      className="block text-md font-medium text-gray-700"
                    >
                      Additional Information
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="additional-information"
                        name="additional-information"
                        rows="4"
                        className="block w-full rounded-md bg-white text-black border-gray-300 border border-solid shadow-sm focus:border-gray-300 focus-visible:outline-orange-300 focus:ring-gray-300 sm:text-lg"
                      />
                    </div>
                  </div>
                </section>

                <div className="mt-10 border-t border-gray-200 pt-6 sm:flex sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:order-last sm:ml-6 sm:w-auto"
                  >
                    Submit
                  </button>
                  <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                    You won't be charged until the next step.
                  </p>
                </div>
              </div>
            </form>
          </dl>
        </div>
      </div>
    </div>
  );
}
