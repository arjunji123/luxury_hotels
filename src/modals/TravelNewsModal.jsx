import React from 'react'

function TravelNewsModal({closeNewsLetter}) {
  return (
    <>
    <div className="modal modal-newsletter d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="newsletter-outerBox ">
                            {/* Close Icon */}
                            <button
                                className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                                onClick={closeNewsLetter}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h5 className="text-center newsletter-heading1">
                            POST HOTEL NEWS
                            </h5>

                            <ol className="aligned-list">
                               
                                <li>
                                    <span>1.</span>
                                    Instant Exposure – Upload your news and we’ll send it through email marketing to millions of subscribers.

                                </li>
                                <li>
                                    <span>2.</span>
                                    Boost Your Hotel's Profile – Keep travelers updated on your new offers, exclusive Michelin-style events.
                                </li>
                                <li>
                                    <span>3.</span>
                                    Engage Clients – Keep your hotel top-of-mind and attract more bookings by sharing exciting updates.
                                </li>



                            </ol>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default TravelNewsModal