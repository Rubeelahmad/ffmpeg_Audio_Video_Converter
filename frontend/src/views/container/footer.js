import React from 'react';
import './footer.scss';


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">

                    <div className="footer-sitemap">
                        <div className="row">
                            <div className="col-lg-6">
                                <h6>Converted Files:</h6>
                                <div className="counter footer-counter">
                                    <span>1,253,003,953</span>
                                    <span>25,008 TB</span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12 col-sm">
                                        <ul className="nav flex-column">
                                            <li><a href="index.html">About</a></li>
                                            <li><a href="../security/index.html">Security</a></li>
                                            <li><a href="../formats/index.html">Formats</a></li>
                                            <li><a href="https://support.convertio.co/" target="_blank"
                                                rel="noopener noreferrer">Help</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-sm">
                                        <ul className="nav flex-column">
                                            <li><a href="../video-converter/index.html">Video Converter</a></li>
                                            <li><a href="../audio-converter/index.html">Audio Converter</a></li>
                                            <li><a href="../document-converter/index.html">Document Converter</a></li>
                                            <li><a href="../image-converter/index.html">Image Converter</a></li>
                                            <li><a href="../ocr/index.html">OCR</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-sm">
                                        <ul className="nav flex-column">
                                            <li><a href="https://developers.convertio.co/" target="_blank"
                                                rel="noopener noreferrer">Developers API</a></li>
                                            <li><a href="https://developers.convertio.co/api/docs/" target="_blank"
                                                rel="noopener noreferrer">API Docs</a></li>
                                            <li><a href="https://developers.convertio.co/cli/" target="_blank"
                                                rel="noopener noreferrer">CLI Docs</a></li>
                                            <li><a href="https://developers.convertio.co/api/pricing/" target="_blank"
                                                rel="noopener noreferrer">API Pricing</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="footer-bottom">
                        <div className="row align-items-center">

                            {/* <div className="col-md-auto language-select-wrapper">
                                <select className="language-select" name="language-select">
                                    <option>English</option>
                                    <option data-hreflang="id" value="../id/about/index.html">Bahasa Indonesia</option>
                                    <option data-hreflang="de" value="../de/about/index.html">Deutsch</option>
                                    <option data-hreflang="es" value="../es/about/index.html">Español</option>
                                    <option data-hreflang="fr" value="../fr/about/index.html">Français</option>
                                    <option data-hreflang="it" value="../it/about/index.html">Italiano</option>
                                    <option data-hreflang="nl" value="../nl/about/index.html">Nederlands</option>
                                    <option data-hreflang="pl" value="../pl/about/index.html">Polski</option>
                                    <option data-hreflang="pt" value="../pt/about/index.html">Português</option>
                                    <option data-hreflang="vn" value="../vn/about/index.html">Tiếng Việt</option>
                                    <option data-hreflang="tr" value="../tr/about/index.html">Türkçe</option>
                                    <option data-hreflang="ru" value="../ru/about/index.html">Русский</option>
                                    <option data-hreflang="ar" value="../ar/about/index.html">العربية</option>
                                    <option data-hreflang="th" value="../th/about/index.html">ไทย</option>
                                    <option data-hreflang="ja" value="../ja/about/index.html">日本語</option>
                                    <option data-hreflang="zh" value="../zh/about/index.html">简体中文</option>
                                    <option data-hreflang="kr" value="../kr/about/index.html">한국어</option>
                                </select>
                            </div> */}

                            <div className="col copyright">
                                {/* <p>© 2021  All rights reserved.</p> */}


                                <ul className="nav">
                                    <li style={{marginRight: '10px'}}><a href="../terms/index.html">Terms of Use</a></li>
                                    <li><a href="../privacy/index.html">Privacy Policy</a></li>
                                </ul>


                                {/* <p className="logo">
                                    <a href="https://softo.co/" aria-label="Go to softo.co company web page">
                                        <svg width="44" height="17">
                                            <use xlink:href="#svg-softo-logo"></use>
                                        </svg>
                                    </a>
                                </p> */}

                            </div>

                        </div>
                    </div>

                </div>

                <div className="chrome-app d-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                        <g fill="none" fillRule="nonzero">
                            <path fill="#4caf50"
                                d="M50 25c0 13.805-11.195 25-25 25S0 38.805 0 25 11.195 0 25 0s25 11.195 25 25z"></path>
                            <path fill="#ffc107" d="M25 0v25l10 5-11.054 20H25c13.816 0 25-11.184 25-25S38.816 0 25 0z">
                            </path>
                            <path fill="#f44336"
                                d="M47.3 13.75H25V30l-3.75-1.25-17.3-17.175h-.025C8.35 4.613 16.137 0 25 0c9.75 0 18.188 5.6 22.3 13.75z">
                            </path>
                            <path fill="#ffffff"
                                d="M36.25 25c0 6.211-5.039 11.25-11.25 11.25S13.75 31.211 13.75 25 18.789 13.75 25 13.75 36.25 18.789 36.25 25z">
                            </path>
                            <path fill="#2196f3"
                                d="M33.75 25A8.748 8.748 0 0 1 25 33.75 8.748 8.748 0 0 1 16.25 25 8.748 8.748 0 0 1 25 16.25 8.748 8.748 0 0 1 33.75 25z">
                            </path>
                        </g>
                    </svg>
                    <div>
                        <h5>Install Convertio Chrome Extension?</h5>
                        <p>
                            <button className="btn-cancel">No, thanks</button>
                            <button className="btn-install">Install</button>
                        </p>
                    </div>
                </div>

                <div className="rate-us d-none">
                    <span className="close"></span>
                    <div className="rate">
                        <h5>Rate Conversion Quality!</h5>
                        {/* <div className="stars" data-score="3">
                            <i className="star on" title="Hated it">
                                <svg>
                                    <use xlink:href="#svg-icon-star"></use>
                                </svg>
                            </i>
                            <i className="star on" title="Disliked it">
                                <svg>
                                    <use xlink:href="#svg-icon-star"></use>
                                </svg>
                            </i>
                            <i className="star on" title="It was okay">
                                <svg>
                                    <use xlink:href="#svg-icon-star"></use>
                                </svg>
                            </i>
                            <i className="star" title="Liked it">
                                <svg>
                                    <use xlink:href="#svg-icon-star"></use>
                                </svg>
                            </i>
                            <i className="star" title="Loved it">
                                <svg>
                                    <use xlink:href="#svg-icon-star"></use>
                                </svg>
                            </i>
                        </div> */}

                    </div>
                    <div className="rated d-none">
                        <h5>Thank you!</h5>
                        <p className="text-center">
                            <button className="btn" data-action="changeScore">Change Score</button>
                            <button className="btn" data-action="close">Close</button>
                        </p>
                    </div>
                    <div className="rated-trust d-none">
                        <h5>Thank you!</h5>
                        <p>
                            <a className="btn" data-action="trustPilot">
                                Rate Us On <svg width="102" height="31" viewBox="0 0 102 31" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M27.562 9.5H37.6526V11.3826H33.685V21.9658H31.5032V11.3826H27.5532V9.5H27.562ZM37.2215 12.9398H39.0865V14.6816H39.1217C39.1833 14.4353 39.2977 14.1978 39.4648 13.969C39.632 13.7403 39.8343 13.5204 40.0718 13.3356C40.3093 13.1421 40.5733 12.9925 40.8636 12.8694C41.1539 12.755 41.453 12.6934 41.7521 12.6934C41.9808 12.6934 42.148 12.7022 42.236 12.711C42.3239 12.7198 42.4119 12.7374 42.5087 12.7462V14.664C42.3679 14.6376 42.2272 14.62 42.0776 14.6025C41.9281 14.5849 41.7873 14.5761 41.6465 14.5761C41.3122 14.5761 40.9955 14.6464 40.6964 14.7784C40.3973 14.9104 40.1422 15.1127 39.9223 15.3678C39.7023 15.6317 39.5264 15.9484 39.3944 16.3355C39.2625 16.7226 39.2009 17.1625 39.2009 17.6639V21.957H37.2127V12.9398H37.2215ZM51.6491 21.9658H49.6961V20.7078H49.6609C49.4146 21.1653 49.0539 21.5259 48.57 21.7987C48.0862 22.0714 47.5935 22.2121 47.0921 22.2121C45.9045 22.2121 45.0423 21.9218 44.5145 21.3324C43.9866 20.743 43.7227 19.8545 43.7227 18.6668V12.9398H45.7109V18.4733C45.7109 19.265 45.8605 19.8281 46.1684 20.1536C46.4675 20.4791 46.8985 20.6462 47.444 20.6462C47.8663 20.6462 48.2093 20.5846 48.4909 20.4527C48.7724 20.3207 49.0011 20.1536 49.1683 19.9336C49.3442 19.7225 49.4674 19.4586 49.5465 19.1595C49.6257 18.8604 49.6609 18.5349 49.6609 18.183V12.9486H51.6491V21.9658ZM55.0361 19.0715C55.0977 19.6521 55.3176 20.0568 55.6959 20.2943C56.083 20.5231 56.5404 20.6462 57.0771 20.6462C57.2618 20.6462 57.4729 20.6286 57.7105 20.6022C57.948 20.5758 58.1767 20.5143 58.3791 20.4351C58.5902 20.3559 58.7573 20.2327 58.8981 20.0744C59.0301 19.916 59.0916 19.7137 59.0828 19.4586C59.0741 19.2035 58.9773 18.9923 58.8013 18.834C58.6254 18.6668 58.4055 18.5437 58.1327 18.4381C57.86 18.3413 57.5521 18.2533 57.2002 18.183C56.8483 18.1126 56.4964 18.0334 56.1357 17.9542C55.7663 17.8751 55.4056 17.7695 55.0625 17.6551C54.7194 17.5408 54.4115 17.3824 54.1387 17.1801C53.866 16.9865 53.6461 16.7314 53.4877 16.4235C53.3206 16.1156 53.2414 15.7373 53.2414 15.2798C53.2414 14.7872 53.3646 14.3825 53.6021 14.0482C53.8396 13.7139 54.1475 13.45 54.5082 13.2477C54.8777 13.0453 55.2824 12.9046 55.7311 12.8166C56.1797 12.7374 56.6108 12.6934 57.0155 12.6934C57.4817 12.6934 57.9304 12.7462 58.3527 12.843C58.7749 12.9398 59.162 13.0981 59.5051 13.3268C59.8482 13.5468 60.1297 13.8371 60.3585 14.189C60.5872 14.5409 60.728 14.9719 60.7895 15.4734H58.7134C58.6166 14.9983 58.4055 14.6728 58.0624 14.5145C57.7193 14.3473 57.3234 14.2682 56.8835 14.2682C56.7428 14.2682 56.5756 14.2769 56.3821 14.3033C56.1885 14.3297 56.0126 14.3737 55.8366 14.4353C55.6695 14.4969 55.5287 14.5937 55.4056 14.7168C55.2912 14.84 55.2296 14.9983 55.2296 15.2007C55.2296 15.447 55.3176 15.6405 55.4847 15.7901C55.6519 15.9396 55.8718 16.0628 56.1445 16.1684C56.4173 16.2651 56.7252 16.3531 57.0771 16.4235C57.429 16.4939 57.7896 16.5731 58.1591 16.6522C58.5198 16.7314 58.8717 16.837 59.2236 16.9513C59.5755 17.0657 59.8834 17.2241 60.1561 17.4264C60.4288 17.6287 60.6488 17.8751 60.8159 18.1742C60.9831 18.4733 61.071 18.8516 61.071 19.2914C61.071 19.8281 60.9479 20.2767 60.7016 20.655C60.4552 21.0245 60.1385 21.3324 59.7514 21.5611C59.3644 21.7899 58.9245 21.9658 58.4494 22.0714C57.9744 22.1769 57.4993 22.2297 57.0331 22.2297C56.4612 22.2297 55.9334 22.1682 55.4496 22.0362C54.9657 21.9042 54.5434 21.7107 54.1915 21.4556C53.8396 21.1916 53.5581 20.8661 53.3558 20.4791C53.1535 20.092 53.0479 19.6257 53.0303 19.0891H55.0361V19.0715ZM61.5989 12.9398H63.1032V10.2302H65.0914V12.9398H66.8861V14.4265H65.0914V19.2474C65.0914 19.4586 65.1002 19.6345 65.1178 19.7929C65.1354 19.9424 65.1794 20.0744 65.241 20.18C65.3026 20.2855 65.3993 20.3647 65.5313 20.4175C65.6632 20.4703 65.8304 20.4967 66.0591 20.4967C66.1999 20.4967 66.3406 20.4967 66.4814 20.4879C66.6222 20.4791 66.7629 20.4615 66.9037 20.4263V21.9658C66.6837 21.9922 66.4638 22.0098 66.2615 22.0362C66.0503 22.0626 65.8392 22.0714 65.6193 22.0714C65.0914 22.0714 64.6692 22.0186 64.3525 21.9218C64.0357 21.8251 63.7806 21.6755 63.6047 21.482C63.4199 21.2884 63.3056 21.0509 63.2352 20.7606C63.1736 20.4703 63.1296 20.136 63.1208 19.7665V14.4441H61.6165V12.9398H61.5989ZM68.2937 12.9398H70.1763V14.1626H70.2115C70.493 13.6347 70.8801 13.2653 71.3815 13.0365C71.883 12.8078 72.4196 12.6934 73.009 12.6934C73.7216 12.6934 74.3374 12.8166 74.8653 13.0717C75.3931 13.318 75.833 13.6611 76.1849 14.101C76.5368 14.5409 76.7919 15.0511 76.9678 15.6317C77.1438 16.2124 77.2317 16.837 77.2317 17.4968C77.2317 18.1038 77.1526 18.6932 76.9942 19.2562C76.8359 19.8281 76.5983 20.3295 76.2816 20.7694C75.9649 21.2092 75.5602 21.5523 75.0676 21.8163C74.5749 22.0802 74.0031 22.2121 73.3345 22.2121C73.0442 22.2121 72.7539 22.1857 72.4636 22.133C72.1733 22.0802 71.8918 21.9922 71.6278 21.8778C71.3639 21.7635 71.1088 21.6139 70.8889 21.4292C70.6601 21.2444 70.4754 21.0333 70.317 20.7958H70.2818V25.3H68.2937V12.9398V12.9398ZM75.2435 17.4616C75.2435 17.0569 75.1908 16.661 75.0852 16.2739C74.9796 15.8869 74.8213 15.5526 74.6101 15.2535C74.399 14.9543 74.1351 14.7168 73.8272 14.5409C73.5105 14.3649 73.1498 14.2682 72.7451 14.2682C71.9094 14.2682 71.2759 14.5585 70.8537 15.1391C70.4314 15.7197 70.2203 16.4939 70.2203 17.4616C70.2203 17.919 70.2731 18.3413 70.3874 18.7284C70.5018 19.1155 70.6601 19.4498 70.8889 19.7313C71.1088 20.0128 71.3727 20.2327 71.6806 20.3911C71.9885 20.5582 72.3492 20.6374 72.7539 20.6374C73.2114 20.6374 73.5896 20.5406 73.9064 20.3559C74.2231 20.1712 74.4782 19.9248 74.6805 19.6345C74.8828 19.3354 75.0324 19.0011 75.1204 18.6228C75.1996 18.2445 75.2435 17.8575 75.2435 17.4616V17.4616ZM78.7537 9.5H80.7419V11.3826H78.7537V9.5ZM78.7537 12.9398H80.7419V21.9658H78.7537V12.9398ZM82.5189 9.5H84.5071V21.9658H82.5189V9.5ZM90.6037 22.2121C89.8823 22.2121 89.2401 22.089 88.6771 21.8514C88.114 21.6139 87.639 21.2796 87.2431 20.8661C86.856 20.4439 86.5569 19.9424 86.3546 19.3618C86.1522 18.7812 86.0467 18.139 86.0467 17.444C86.0467 16.7578 86.1522 16.1244 86.3546 15.5438C86.5569 14.9631 86.856 14.4617 87.2431 14.0394C87.6302 13.6171 88.114 13.2916 88.6771 13.0541C89.2401 12.8166 89.8823 12.6934 90.6037 12.6934C91.3251 12.6934 91.9673 12.8166 92.5303 13.0541C93.0933 13.2916 93.5684 13.6259 93.9643 14.0394C94.3513 14.4617 94.6505 14.9631 94.8528 15.5438C95.0551 16.1244 95.1607 16.7578 95.1607 17.444C95.1607 18.139 95.0551 18.7812 94.8528 19.3618C94.6505 19.9424 94.3513 20.4439 93.9643 20.8661C93.5772 21.2884 93.0933 21.6139 92.5303 21.8514C91.9673 22.089 91.3251 22.2121 90.6037 22.2121V22.2121ZM90.6037 20.6374C91.0435 20.6374 91.4306 20.5406 91.7561 20.3559C92.0816 20.1712 92.3456 19.9248 92.5567 19.6257C92.7678 19.3266 92.9174 18.9835 93.023 18.6052C93.1197 18.2269 93.1725 17.8399 93.1725 17.444C93.1725 17.0569 93.1197 16.6786 93.023 16.2915C92.9262 15.9045 92.7678 15.5702 92.5567 15.271C92.3456 14.9719 92.0816 14.7344 91.7561 14.5497C91.4306 14.3649 91.0435 14.2682 90.6037 14.2682C90.1638 14.2682 89.7767 14.3649 89.4512 14.5497C89.1257 14.7344 88.8618 14.9807 88.6507 15.271C88.4395 15.5702 88.29 15.9045 88.1844 16.2915C88.0876 16.6786 88.0349 17.0569 88.0349 17.444C88.0349 17.8399 88.0876 18.2269 88.1844 18.6052C88.2812 18.9835 88.4395 19.3266 88.6507 19.6257C88.8618 19.9248 89.1257 20.1712 89.4512 20.3559C89.7767 20.5494 90.1638 20.6374 90.6037 20.6374V20.6374ZM95.7413 12.9398H97.2457V10.2302H99.2339V12.9398H101.029V14.4265H99.2339V19.2474C99.2339 19.4586 99.2427 19.6345 99.2602 19.7929C99.2778 19.9424 99.3218 20.0744 99.3834 20.18C99.445 20.2855 99.5418 20.3647 99.6737 20.4175C99.8057 20.4703 99.9728 20.4967 100.202 20.4967C100.342 20.4967 100.483 20.4967 100.624 20.4879C100.765 20.4791 100.905 20.4615 101.046 20.4263V21.9658C100.826 21.9922 100.606 22.0098 100.404 22.0362C100.193 22.0626 99.9816 22.0714 99.7617 22.0714C99.2339 22.0714 98.8116 22.0186 98.4949 21.9218C98.1782 21.8251 97.9231 21.6755 97.7471 21.482C97.5624 21.2884 97.448 21.0509 97.3776 20.7606C97.316 20.4703 97.2721 20.136 97.2633 19.7665V14.4441H95.7589V12.9398H95.7413Z"
                                        fill="#333333"></path>
                                    <path
                                        d="M25.19 9.86053H15.8802L13.0045 1L10.1199 9.86053L0.810059 9.85155L8.3496 15.3332L5.46498 24.1848L13.0045 18.7121L20.5351 24.1848L17.6594 15.3332L25.19 9.86053Z"
                                        fill="#00B67A"></path>
                                    <path d="M18.3063 17.3372L17.6593 15.3333L13.0044 18.7121L18.3063 17.3372Z"
                                        fill="#005128"></path>
                                </svg>

                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;