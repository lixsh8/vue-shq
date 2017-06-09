;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jia" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M821.129 454.944H543.324V177.17100000000005c0-23.943-19.387-43.359-43.346-43.359-23.968 0-43.352 19.416-43.352 43.359v277.773H178.871c-23.969 0-43.352 19.416-43.352 43.359 0 23.93 19.383 43.346 43.352 43.346h277.756v277.787c0 23.926 19.384 43.344 43.352 43.344 23.959 0 43.346-19.418 43.346-43.344V541.649h277.805c23.969 0 43.352-19.416 43.352-43.346C864.48 474.36 845.098 454.944 821.129 454.944z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M96.269577 449.359334l829.613778 0c17.619286 0 31.908734 14.288424 31.908734 31.907711l0 63.816444c0 17.626449-14.288424 31.908734-31.908734 31.908734L96.269577 576.992223c-17.619286 0-31.907711-14.282285-31.907711-31.908734l0-63.816444C64.361867 463.647759 78.650291 449.359334 96.269577 449.359334z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-loading" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M914.432 503.296m-75.776 0a14.8 14.8 0 1 0 151.552 0 14.8 14.8 0 1 0-151.552 0Z"  ></path>' +
    '' +
    '<path d="M865.28 319.488m-69.12 0a13.5 13.5 0 1 0 138.24 0 13.5 13.5 0 1 0-138.24 0Z"  ></path>' +
    '' +
    '<path d="M749.056 186.88m-64 0a12.5 12.5 0 1 0 128 0 12.5 12.5 0 1 0-128 0Z"  ></path>' +
    '' +
    '<path d="M587.264 116.736m-58.88 0a11.5 11.5 0 1 0 117.76 0 11.5 11.5 0 1 0-117.76 0Z"  ></path>' +
    '' +
    '<path d="M410.624 122.368m-54.784 0a10.7 10.7 0 1 0 109.568 0 10.7 10.7 0 1 0-109.568 0Z"  ></path>' +
    '' +
    '<path d="M256 201.728m-51.2 0a10 10 0 1 0 102.4 0 10 10 0 1 0-102.4 0Z"  ></path>' +
    '' +
    '<path d="M146.944 342.528m-44.032 0a8.6 8.6 0 1 0 88.064 0 8.6 8.6 0 1 0-88.064 0Z"  ></path>' +
    '' +
    '<path d="M109.568 512m-36.864 0a7.2 7.2 0 1 0 73.728 0 7.2 7.2 0 1 0-73.728 0Z"  ></path>' +
    '' +
    '<path d="M146.944 681.472m-33.792 0a6.6 6.6 0 1 0 67.584 0 6.6 6.6 0 1 0-67.584 0Z"  ></path>' +
    '' +
    '<path d="M252.416 819.712m-27.648 0a5.4 5.4 0 1 0 55.296 0 5.4 5.4 0 1 0-55.296 0Z"  ></path>' +
    '' +
    '<path d="M404.48 900.096m-22.016 0a4.3 4.3 0 1 0 44.032 0 4.3 4.3 0 1 0-44.032 0Z"  ></path>' +
    '' +
    '<path d="M576 909.312m-16.896 0a3.3 3.3 0 1 0 33.792 0 3.3 3.3 0 1 0-33.792 0Z"  ></path>' +
    '' +
    '<path d="M736.768 845.824m-11.264 0a2.2 2.2 0 1 0 22.528 0 2.2 2.2 0 1 0-22.528 0Z"  ></path>' +
    '' +
    '<path d="M856.576 719.872m-6.144 0a1.2 1.2 0 1 0 12.288 0 1.2 1.2 0 1 0-12.288 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-btn_comment_default" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M279.273 512a58.182 58.182 0 1 1 0-116.364 58.182 58.182 0 0 1 0 116.364M512 512a58.182 58.182 0 1 1 0-116.364A58.182 58.182 0 0 1 512 512m232.727 0a58.182 58.182 0 1 1 0-116.364 58.182 58.182 0 0 1 0 116.364M512 104.727c-224.954 0-407.273 156.3-407.273 349.091 0 118.272 68.841 222.674 173.848 285.79l-1.862 134.981 136.936-82.385c31.558 6.749 64.373 10.705 98.351 10.705 224.954 0 407.273-156.3 407.273-349.09 0-192.792-182.319-349.092-407.273-349.092m0 756.364c-29.79 0-58.787-2.7-87.04-7.354L221.09 977.455V771.49C114.782 696.785 46.546 582.377 46.546 453.818 46.545 228.911 254.93 46.545 512 46.545s465.455 182.366 465.455 407.273c0 224.954-208.384 407.273-465.455 407.273" fill="#9C9B9E" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-btn_all_default" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M855.04 169.83c70.656 71.476 105.984 161.536 105.984 270.03 0 89.19-28.16 170.802-84.48 244.838-55.552 69.836-116.122 104.704-181.76 104.704-52.992 0-82.022-27.75-87.04-83.252-42.957 57.19-95.949 85.812-159.027 85.812-52.173 0-95.079-18.125-128.717-54.272-32.82-35.328-49.203-80.384-49.203-135.015 0-95.078 28.57-176.281 85.811-243.558 54.682-67.328 119.86-100.967 195.584-100.967 60.57 0 100.966 31.54 121.14 94.67l18.943-70.657h82.023l-89.6 329.319c-10.087 36.198-15.156 61.85-15.156 77.004 0 20.992 11.776 31.54 35.328 31.54 38.708 0 77.824-24.832 117.35-74.445 45.466-58.061 68.148-126.208 68.148-204.442 0-90.01-30.26-164.454-90.829-223.385-64.819-63.898-152.269-95.898-262.502-95.898-116.07 0-211.968 38.298-287.744 114.842C175.309 311.552 138.29 407.91 138.29 525.67c0 127.898 37.376 226.304 112.282 295.322 71.526 66.458 168.704 99.686 291.533 99.686 88.32 0 165.734-15.974 232.192-47.974 58.88-29.44 105.574-68.966 140.032-118.63h88.37c-44.594 75.776-108.134 133.785-190.566 174.182-81.612 39.526-171.622 59.29-270.028 59.29-150.63 0-269.67-41.626-357.12-124.928C95.744 776.806 51.2 663.654 51.2 523.162c0-132.096 44.544-242.279 133.786-330.65C278.323 98.304 397.312 51.2 542.106 51.2c132.096 0 236.39 39.526 312.934 118.63zM423.424 415.898c-42.854 52.992-64.307 116.53-64.307 190.566 0 34.458 7.987 61.44 23.961 80.742 16.845 20.173 40.807 30.31 71.936 30.31 31.95 0 63.079-12.646 93.39-37.887 30.258-25.242 50.482-54.682 60.569-88.32l27.75-103.475c8.397-36.199 12.647-56.372 12.647-60.57 0-22.733-7.168-42.496-21.504-59.34a75.315 75.315 0 0 0-61.799-30.26c-55.552 0-103.065 26.112-142.592 78.234z" fill="#D0CED2" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-btn_comment_select1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M229.337 423.818a71.72 71.72 0 1 0 143.438 0 71.72 71.72 0 0 0-143.438 0z m230.636 0a71.72 71.72 0 1 0 143.439 0 71.72 71.72 0 0 0-143.44 0z m230.557 0a71.72 71.72 0 1 0 143.44 0 71.72 71.72 0 0 0-143.44 0z" fill="#ECAD5D" ></path>' +
    '' +
    '<path d="M531.692 39.582c-271.635 0-491.835 172.032-491.835 384.236 0 116.815 66.718 221.341 171.835 291.84l37.73 202.87c0.395 2.245 1.104 4.411 1.93 6.46v0.117l0.63 1.3 0.08 0.236a11.185 11.185 0 0 0 0.827 1.418l0.63 1.024a0.788 0.788 0 0 1 0.197 0.394 9.452 9.452 0 0 1 0.512 0.827c0.078 0.118 0.078 0.236 0.197 0.236 0.118 0.08 0.118 0.197 0.197 0.276 0.118 0.236 0.315 0.315 0.393 0.512 0.237 0.315 0.434 0.63 0.749 0.945l0.078 0.079c3.19 3.938 7.208 6.892 11.58 8.822 0.118 0 0.236 0.118 0.315 0.118a29.066 29.066 0 0 0 15.163 2.245h0.315c0.315 0 0.63-0.118 0.906-0.118l0.827-0.079h0.512l1.26-0.315h0.079a29.223 29.223 0 0 0 10.358-4.608l189.834-131.78a643.185 643.185 0 0 0 44.583 1.575c271.636 0 491.835-172.072 491.835-384.276 0.118-212.283-220.081-384.354-491.717-384.354z m309.84 607.507c-39.543 30.957-85.938 55.336-137.808 72.468a548.825 548.825 0 0 1-172.11 27.057c-16.739 0-33.32-0.748-49.704-2.166a30.602 30.602 0 0 0-21.031 5.238L301.135 860.554l-31.43-169.196a30.602 30.602 0 0 0-14.453-20.677c-11.698-7.405-22.843-15.282-33.635-23.592-38.4-30.01-68.41-64.63-89.127-102.951-20.677-38.321-31.232-78.77-31.232-120.32 0-41.472 10.555-81.92 31.232-120.28 20.716-38.322 50.727-72.941 89.127-102.952 39.582-30.956 85.977-55.336 137.846-72.468a548.825 548.825 0 0 1 172.111-27.057c59.865 0 117.76 9.137 172.15 27.057 51.87 17.132 98.147 41.512 137.846 72.468 38.4 30.01 68.412 64.63 89.128 102.951 20.677 38.321 31.232 78.77 31.232 120.28a251.038 251.038 0 0 1-31.232 120.32c-20.598 38.204-50.61 72.941-89.167 102.952z" fill="#ECAD5D" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-btn_ranking_default" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M102.4 972.8h163.84V376.474H102.4V972.8z m327.68 0h163.84V51.2H430.08v921.6z m327.68-433.664V972.8H921.6V539.136H757.76z" fill="#D0CED2" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-btn_like_select" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M981.333 394.155c0 78.08-34.133 148.394-88.405 197.12h0.427L600.02 880.768c-29.354 28.885-58.709 57.899-88.021 57.899-29.355 0-58.667-28.971-87.979-57.899L130.688 591.232h0.427a264.021 264.021 0 0 1-88.448-197.12C42.667 247.211 163.413 128 312.32 128c79.147 0 150.315 33.707 199.68 87.296A270.72 270.72 0 0 1 711.68 128c148.907 0 269.653 119.168 269.653 266.155" fill="#E45D50" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-btn_like_default" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M871.59517 591.232l0.426-21.333-15.018-15.19-293.334 289.536C524.46017 882.944 506.88017 896 490.66717 896c-16.214 0-33.792-13.056-73.003-51.755L124.33117 554.71l-14.976 15.19v21.333h56.149l-41.515-37.205A242.645 242.645 0 0 1 42.66717 372.82C42.66717 237.653 153.81317 128 290.98717 128c70.997 0 137.13 29.525 183.978 80.384l15.702 17.067 15.701-17.067A249.344 249.344 0 0 1 690.34717 128c137.173 0 248.32 109.653 248.32 244.821h42.666c0-158.805-130.346-287.488-290.986-287.488a292.096 292.096 0 0 0-199.68 78.379 292.096 292.096 0 0 0-199.68-78.379C130.34717 85.333 0.00017 214.016 0.00017 372.821A284.33 284.33 0 0 0 86.91217 577.75c2.816 2.731 5.675 5.419 8.619 8.022l14.25-15.872v-21.334H57.34417l330.325 326.102c48.811 48.085 70.272 64 102.998 64 32.725 0 54.186-15.915 102.997-64.043l330.325-326.059h-52.394V569.9l14.208 15.872a292.779 292.779 0 0 0 34.858-37.206 284.373 284.373 0 0 0 60.672-175.786h-42.666c0 69.93-29.867 135.082-81.323 181.248l-41.515 37.205h55.766z" fill="#E35D50" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-btn_tp_default" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M797.538 433.23h-59.076c-16.581 0-29.539-17.959-29.539-39.384s13.47-39.384 29.539-39.384h59.076c16.581 0 29.539 17.959 29.539 39.384s-13.47 39.385-29.539 39.385zM794.9 275.693H504.793c-18.078 0-32.178-17.96-32.178-39.384 0-22.095 14.69-39.385 32.178-39.385H794.9c18.077 0 32.177 17.96 32.177 39.385 0 22.094-14.1 39.384-32.177 39.384z" fill="#FFB65A" ></path>' +
    '' +
    '<path d="M816.207 905.846H207.793c-71.01 0-129.024-56.32-129.024-125.243V322.166c0-68.923 57.462-124.652 128.433-125.243h32.138c18 0 32.099 14.218 32.099 31.193a31.626 31.626 0 0 1-32.099 31.153h-31.547c-35.485 0-64.236 27.924-64.236 62.385v458.398c0 34.461 28.75 62.346 64.197 62.346h608.492c35.446 0 64.197-27.885 64.197-62.346V322.166c0-34.461-28.75-62.385-64.197-62.385h-32.69a31.626 31.626 0 0 1-32.137-31.153c0-17.526 14.651-31.193 32.138-31.193h32.098c71.562 0 129.576 56.32 129.576 125.243v458.437c0 68.332-57.462 124.731-129.024 124.731zM442.88 196.923H266.043c-16.699 0-29.735-17.96-29.735-39.385 0-22.094 13.548-39.384 29.735-39.384H442.88c16.7 0 29.735 17.96 29.735 39.384s-13.036 39.385-29.735 39.385z" fill="#FFB65A" ></path>' +
    '' +
    '<path d="M452.923 415.35c82.708 0 150.252 61.4 150.252 136.547 0 75.185-67.584 136.585-150.252 136.585-82.708 0-150.252-61.4-150.252-136.585 0-75.146 67.584-136.547 150.252-136.547z m0-60.888c-119.965 0-216.615 88.418-216.615 196.923s97.28 196.923 216.615 196.923 216.615-88.419 216.615-196.923-97.28-196.923-216.615-196.923z" fill="#FFB65A" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-like" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M889.6 396.8H608c25.6-134.4 76.8-300.8-32-352C460.8-6.4 454.4 64 441.6 179.2c-12.8 121.6-192 249.6-192 249.6V992h608c83.2-38.4 134.4-377.6 160-499.2 25.6-121.6-128-96-128-96zM0 428.8h179.2v569.6H0V428.8z" fill="#FF565D" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-like1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1023.219 498.802c0.379 4.71 0.028 9.552-1.249 14.378l-92.086 406.46c-1.293 4.87-3.424 9.29-6.126 13.221-9.863 19.692-24.86 37.108-44.798 49.79-21.006 13.35-44.464 19.584-67.638 19.541v-0.255l-591.504-0.248c-2.067 0.307-4.161 0.515-6.316 0.515-2.161 0-4.263-0.208-6.346-0.523l-157.335-0.066c-2.212 0.355-4.462 0.588-6.775 0.588-23.54 0-42.616-19.078-42.616-42.613l0.387-511.61c0-23.538 19.084-42.615 42.624-42.615 1.759 0 3.482 0.137 5.189 0.351l141.427-0.329v-0.804c130.127-9.314 233.238-115.991 236.918-247.598-0.328-3.703-0.563-7.425-0.563-11.214 0-68.468 55.501-123.977 123.977-123.977 58.84 0 107.996 41.031 120.693 96.008l0.627-0.081c6.979 31.387 10.784 63.969 10.784 97.452 0 51.626-8.814 101.178-24.941 147.291l237.867 0.257c2.19 0 4.328 0.218 6.432 0.541 40.615 1.596 79.732 22.509 102.774 59.648 14.658 23.618 20.505 50.156 18.594 75.892M85.7 916.404l85.224 0.036 0.321-425.779-85.144 0.19-0.401 425.553z m846.995-448.966c-8.192-13.209-22.662-20.152-37.164-19.37v-0.126h-0.108l-300.67-0.312c-23.531 0-42.614-19.086-42.614-42.623 0-6.775 1.628-13.163 4.445-18.851l-0.453-0.373c17.025-31.694 29.409-66.243 36.431-102.689l0.533 0.014s5.667-23.012 5.593-67.148c-0.059-34.964-6.432-66.884-6.432-66.884h-0.321c0.028-0.621 0.096-1.226 0.096-1.854 0-22.004-17.845-39.848-39.849-39.848-22.015 0-39.858 17.843-39.858 39.848 0 0.92 0.081 1.826 0.139 2.731l-0.556 0.008s0.679 33.271-5.964 67.775c-2.821 14.638-6.783 28.289-10.392 39.102a13.562 13.562 0 0 1-0.21-0.101c-35.868 109.66-126.06 194.665-238.779 223.299l-0.408 436.435 555.37 0.226c1.876 0 3.71 0.161 5.52 0.406a39.555 39.555 0 0 0 16.048-5.851c7.14-4.535 12.323-10.971 15.361-18.232l0.11 0.062 88.662-391.339-0.343-0.102c3.543-11.067 2.419-23.553-4.187-34.203" fill="#9C9B9E" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pic_date" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M750.95 512h-79.718v79.667h79.667V512zM352.717 153.6h-39.885v119.45h39.834V153.6zM551.834 512h-79.668v79.667h79.668V512z m79.616-318.566h-238.9v39.833h238.9v-39.833zM352.768 512H273.05v79.667h79.718V512z m477.85-318.566h-79.616v39.833h39.782c22.016 0 39.834 17.818 39.834 39.783v119.5H193.434v-119.5c0-22.016 17.817-39.783 39.833-39.783h39.783v-39.833h-79.616a39.834 39.834 0 0 0-39.834 39.833v597.3c0 22.015 17.818 39.833 39.834 39.833h637.132c22.016 0 39.834-17.818 39.834-39.834V233.267a39.834 39.834 0 0 0-39.834-39.833z m0 597.299c0 22.016-17.818 39.833-39.834 39.833H233.267a39.834 39.834 0 0 1-39.833-39.833v-358.4h637.132v358.4z m-477.85-119.45H273.05v79.667h79.718v-79.718z m199.117 0h-79.719v79.667h79.668v-79.718zM711.065 153.6h-39.782v119.45h39.834V153.6z m39.885 517.683h-79.718v79.667h79.667v-79.718z" fill="#A0A0A0" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pic_location" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M867.584 844.288L745.626 628.224a17.664 17.664 0 0 0-15.258-8.704h-69.376c-10.189 0-16.947 8.704-16.947 17.408 0 10.445 8.448 17.408 16.896 17.408h60.979l101.632 179.456h-621.67l101.632-179.405h60.979c10.189 0 16.896-8.704 16.896-17.408a17.203 17.203 0 0 0-16.896-17.459h-69.427a17.664 17.664 0 0 0-15.258 8.704L156.16 844.288a16.18 16.18 0 0 0 0 17.408c3.38 5.222 8.448 8.704 15.206 8.704h682.701a17.664 17.664 0 0 0 15.207-8.704 21.146 21.146 0 0 0-1.69-17.408M512 476.16c59.136 0 107.52-48.384 107.52-107.52 0-59.136-48.384-107.52-107.52-107.52-59.136 0-107.52 48.384-107.52 107.52 0 59.136 48.384 107.52 107.52 107.52z m0-179.2c39.424 0 71.68 32.256 71.68 71.68 0 39.424-32.256 71.68-71.68 71.68-39.424 0-71.68-32.256-71.68-71.68 0-39.424 32.256-71.68 71.68-71.68z" fill="#A0A0A0" ></path>' +
    '' +
    '<path d="M335.155 488.5L497.87 720.485a15.206 15.206 0 0 0 13.312 6.554c4.966 0 9.933-3.277 13.312-6.554L688.845 488.55v-1.69c24.934-35.942 38.195-76.8 38.195-120.831 0-117.709-96.307-212.429-215.86-212.429a213.658 213.658 0 0 0-214.22 214.016c0 44.134 13.312 84.992 38.195 120.883zM512 189.44c99.328 0 179.2 81.152 179.2 182.17 0 44.697-16.282 87.756-45.568 120.832h1.536L510.413 691.2 376.832 492.493l1.638-1.69c-29.388-31.437-45.67-74.496-45.67-119.193 0-101.018 79.872-182.17 179.2-182.17z" fill="#A0A0A0" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pic_people" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 742.4h-65.229C946.586 625.971 843.725 535.04 718.49 535.04c-16.896 0-33.588 1.843-49.562 5.069a293.607 293.607 0 0 0 45.62-57.754c3.378 0.256 6.502 0.922 9.88 0.922 83.406 0 150.938-64.512 150.938-144.026 0-79.565-67.584-144.025-150.937-144.025-3.38 0-6.656 0.768-9.882 0.921a293.376 293.376 0 0 0-40.601-52.582 223.744 223.744 0 0 1 50.483-6.093c116.736 0 211.302 90.317 211.302 201.626 0 69.53-36.813 130.713-92.979 167.014 98.97 40.448 169.984 129.946 181.248 236.237zM545.638 587.11c173.261 50.228 299.52 203.776 299.52 385.69H778.24c0-1.946 0.256-3.891 0.256-5.837 0-190.873-161.997-345.6-362.086-345.6-199.783 0-361.984 154.727-361.984 345.6 0 1.946 0.307 3.891 0.307 5.837H0c0-168.96 109.056-313.498 263.526-373.402-102.195-46.13-172.902-145.254-172.902-260.147C90.573 180.224 225.638 51.2 392.397 51.2c166.758 0 301.875 128.922 301.875 288.051 0.102 105.626-59.853 197.735-148.634 247.86zM392.55 108.8c-133.324 0-241.51 103.22-241.51 230.4 0 127.283 108.186 230.451 241.51 230.451 133.325 0 241.46-103.168 241.46-230.4s-108.135-230.4-241.46-230.4z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pic_date1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M819.2 512H716.8v102.4h102.4V512z m-512-460.8H256v153.6h51.2V51.2z m256 460.8H460.8v102.4h102.4V512z m102.4-409.6H358.4v51.2h307.2v-51.2zM307.2 512H204.8v102.4h102.4V512z m614.4-409.6H819.2v51.2h51.2a51.2 51.2 0 0 1 51.2 51.2v153.6H102.4V204.8a51.2 51.2 0 0 1 51.2-51.2h51.2v-51.2H102.4a51.2 51.2 0 0 0-51.2 51.2v768a51.2 51.2 0 0 0 51.2 51.2h819.2a51.2 51.2 0 0 0 51.2-51.2v-768a51.2 51.2 0 0 0-51.2-51.2z m0 768a51.2 51.2 0 0 1-51.2 51.2H153.6a51.2 51.2 0 0 1-51.2-51.2V409.6h819.2v460.8zM307.2 716.8H204.8v102.4h102.4V716.8z m256 0H460.8v102.4h102.4V716.8zM768 51.2h-51.2v153.6H768V51.2z m51.2 665.6H716.8v102.4h102.4V716.8z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-btn_tp_select" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M797.538 433.23h-59.076c-16.581 0-29.539-17.959-29.539-39.384s13.47-39.384 29.539-39.384h59.076c16.581 0 29.539 17.959 29.539 39.384s-13.47 39.385-29.539 39.385zM794.9 275.693H504.793c-18.078 0-32.178-17.96-32.178-39.384 0-22.095 14.69-39.385 32.178-39.385H794.9c18.077 0 32.177 17.96 32.177 39.385 0 22.094-14.1 39.384-32.177 39.384z" fill="#ECAD5D" ></path>' +
    '' +
    '<path d="M816.207 905.846H207.793c-71.01 0-129.024-56.32-129.024-125.243V322.166c0-68.923 57.462-124.652 128.433-125.243h32.138c18 0 32.099 14.218 32.099 31.193a31.626 31.626 0 0 1-32.099 31.153h-31.547c-35.485 0-64.236 27.924-64.236 62.385v458.398c0 34.461 28.75 62.346 64.197 62.346h608.492c35.446 0 64.197-27.885 64.197-62.346V322.166c0-34.461-28.75-62.385-64.197-62.385h-32.69a31.626 31.626 0 0 1-32.137-31.153c0-17.526 14.651-31.193 32.138-31.193h32.098c71.562 0 129.576 56.32 129.576 125.243v458.437c0 68.332-57.462 124.731-129.024 124.731zM442.88 196.923H266.043c-16.699 0-29.735-17.96-29.735-39.385 0-22.094 13.548-39.384 29.735-39.384H442.88c16.7 0 29.735 17.96 29.735 39.384s-13.036 39.385-29.735 39.385z" fill="#ECAD5D" ></path>' +
    '' +
    '<path d="M452.923 415.35c82.708 0 150.252 61.4 150.252 136.547 0 75.185-67.584 136.585-150.252 136.585-82.708 0-150.252-61.4-150.252-136.585 0-75.146 67.584-136.547 150.252-136.547z m0-60.888c-119.965 0-216.615 88.418-216.615 196.923s97.28 196.923 216.615 196.923 216.615-88.419 216.615-196.923-97.28-196.923-216.615-196.923z" fill="#ECAD5D" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)