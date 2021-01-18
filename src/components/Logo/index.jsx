import './style.css'

function Logo({ size }) {
    return (
        <a href="#">
            <svg className={'svg-'+size} viewBox="0 0 355 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={size} d="M101.973 54.6104C99.9544 56.3258 97.7041 57.6478 95.2217 58.5762C92.7393 59.4844 90.1559 59.9385 87.4717 59.9385C85.4131 59.9385 83.4251 59.666 81.5078 59.1211C79.6107 58.5964 77.8346 57.8496 76.1797 56.8809C74.5247 55.8919 73.0111 54.7214 71.6387 53.3691C70.2663 51.9967 69.0957 50.4831 68.127 48.8281C67.1582 47.153 66.4014 45.3568 65.8564 43.4395C65.3317 41.5221 65.0693 39.5342 65.0693 37.4756C65.0693 35.417 65.3317 33.4391 65.8564 31.542C66.4014 29.6449 67.1582 27.8688 68.127 26.2139C69.0957 24.5387 70.2663 23.0251 71.6387 21.6729C73.0111 20.3005 74.5247 19.1299 76.1797 18.1611C77.8346 17.1924 79.6107 16.4456 81.5078 15.9209C83.4251 15.376 85.4131 15.1035 87.4717 15.1035C90.1559 15.1035 92.7393 15.5677 95.2217 16.4961C97.7041 17.4043 99.9544 18.7161 101.973 20.4316L97.4316 28C96.1198 26.668 94.6061 25.6286 92.8906 24.8818C91.1751 24.1149 89.3688 23.7314 87.4717 23.7314C85.5745 23.7314 83.7884 24.0947 82.1133 24.8213C80.4583 25.5479 79.0052 26.5368 77.7539 27.7881C76.5026 29.0192 75.5137 30.4723 74.7871 32.1475C74.0605 33.8024 73.6973 35.5785 73.6973 37.4756C73.6973 39.3929 74.0605 41.1891 74.7871 42.8643C75.5137 44.5394 76.5026 46.0026 77.7539 47.2539C79.0052 48.5052 80.4583 49.4941 82.1133 50.2207C83.7884 50.9473 85.5745 51.3105 87.4717 51.3105C88.5615 51.3105 89.6211 51.1794 90.6504 50.917C91.6797 50.6546 92.6585 50.2913 93.5869 49.8271V37.4756H101.973V54.6104ZM139.179 59H137.181L133.972 54.5498C133.185 55.2562 132.347 55.9222 131.459 56.5479C130.591 57.1533 129.673 57.6882 128.704 58.1523C127.735 58.5964 126.736 58.9495 125.707 59.2119C124.698 59.4743 123.669 59.6055 122.619 59.6055C120.339 59.6055 118.189 59.222 116.171 58.4551C114.173 57.6882 112.417 56.5781 110.903 55.125C109.41 53.6517 108.229 51.8555 107.361 49.7363C106.493 47.6172 106.06 45.2054 106.06 42.501C106.06 39.9782 106.493 37.6673 107.361 35.5684C108.229 33.4492 109.41 31.6328 110.903 30.1191C112.417 28.6055 114.173 27.4349 116.171 26.6074C118.189 25.7598 120.339 25.3359 122.619 25.3359C123.669 25.3359 124.708 25.4671 125.737 25.7295C126.767 25.9919 127.766 26.3551 128.734 26.8193C129.703 27.2835 130.621 27.8285 131.489 28.4541C132.377 29.0798 133.205 29.7559 133.972 30.4824L137.181 26.6377H139.179V59ZM130.854 42.501C130.854 41.3708 130.632 40.2809 130.188 39.2314C129.764 38.1618 129.178 37.2233 128.432 36.416C127.685 35.5885 126.807 34.9326 125.798 34.4482C124.809 33.9437 123.749 33.6914 122.619 33.6914C121.489 33.6914 120.419 33.8831 119.41 34.2666C118.421 34.6501 117.553 35.2152 116.807 35.9619C116.08 36.7087 115.505 37.637 115.081 38.7471C114.657 39.8369 114.445 41.0882 114.445 42.501C114.445 43.9137 114.657 45.1751 115.081 46.2852C115.505 47.375 116.08 48.2933 116.807 49.04C117.553 49.7868 118.421 50.3519 119.41 50.7354C120.419 51.1188 121.489 51.3105 122.619 51.3105C123.749 51.3105 124.809 51.0684 125.798 50.584C126.807 50.0794 127.685 49.4235 128.432 48.6162C129.178 47.7887 129.764 46.8503 130.188 45.8008C130.632 44.7311 130.854 43.6312 130.854 42.501ZM186.738 59H178.504V38.4141C178.504 37.849 178.393 37.3141 178.171 36.8096C177.969 36.305 177.676 35.861 177.293 35.4775C176.91 35.0941 176.465 34.8014 175.961 34.5996C175.456 34.3776 174.922 34.2666 174.356 34.2666C173.791 34.2666 173.257 34.3776 172.752 34.5996C172.268 34.8014 171.834 35.0941 171.45 35.4775C171.087 35.861 170.794 36.305 170.572 36.8096C170.37 37.3141 170.27 37.849 170.27 38.4141V59H162.005V38.4141C162.005 37.849 161.894 37.3141 161.672 36.8096C161.47 36.305 161.177 35.861 160.794 35.4775C160.41 35.0941 159.966 34.8014 159.462 34.5996C158.957 34.3776 158.423 34.2666 157.857 34.2666C157.292 34.2666 156.757 34.3776 156.253 34.5996C155.769 34.8014 155.335 35.0941 154.951 35.4775C154.588 35.861 154.295 36.305 154.073 36.8096C153.871 37.3141 153.771 37.849 153.771 38.4141V59H145.506V26.5771H147.504L149.744 29.0596C150.895 28.0908 152.156 27.3441 153.528 26.8193C154.921 26.2744 156.364 26.002 157.857 26.002C159.371 26.002 160.844 26.2845 162.277 26.8496C163.73 27.4147 165.002 28.3936 166.092 29.7861C166.596 29.0999 167.172 28.5146 167.817 28.0303C168.463 27.5459 169.139 27.1523 169.846 26.8496C170.572 26.5469 171.319 26.335 172.086 26.2139C172.853 26.0726 173.61 26.002 174.356 26.002C176.072 26.002 177.676 26.3249 179.17 26.9707C180.684 27.6165 181.995 28.5046 183.105 29.6348C184.236 30.7448 185.124 32.0566 185.77 33.5703C186.415 35.084 186.738 36.6986 186.738 38.4141V59ZM205.689 51.0684C206.012 51.1693 206.335 51.2399 206.658 51.2803C206.981 51.3005 207.304 51.3105 207.627 51.3105C208.434 51.3105 209.211 51.1995 209.958 50.9775C210.705 50.7555 211.401 50.4427 212.047 50.0391C212.713 49.6152 213.298 49.1107 213.803 48.5254C214.327 47.9199 214.751 47.2539 215.074 46.5273L221.129 52.6123C220.362 53.7021 219.474 54.681 218.465 55.5488C217.476 56.4167 216.396 57.1533 215.226 57.7588C214.075 58.3643 212.854 58.8184 211.562 59.1211C210.291 59.444 208.979 59.6055 207.627 59.6055C205.346 59.6055 203.197 59.1816 201.179 58.334C199.181 57.4863 197.425 56.3057 195.911 54.792C194.418 53.2783 193.237 51.4821 192.369 49.4033C191.501 47.3044 191.067 45.0036 191.067 42.501C191.067 39.9378 191.501 37.5967 192.369 35.4775C193.237 33.3584 194.418 31.5521 195.911 30.0586C197.425 28.5651 199.181 27.4046 201.179 26.5771C203.197 25.7497 205.346 25.3359 207.627 25.3359C208.979 25.3359 210.301 25.4974 211.593 25.8203C212.884 26.1432 214.105 26.6074 215.256 27.2129C216.426 27.8184 217.516 28.5651 218.525 29.4531C219.535 30.321 220.423 31.2998 221.189 32.3896L205.689 51.0684ZM209.928 34.0244C209.544 33.8831 209.161 33.7923 208.777 33.752C208.414 33.7116 208.031 33.6914 207.627 33.6914C206.497 33.6914 205.427 33.9033 204.418 34.3271C203.429 34.7308 202.561 35.3161 201.814 36.083C201.088 36.8499 200.513 37.7783 200.089 38.8682C199.665 39.9378 199.453 41.1488 199.453 42.501C199.453 42.8037 199.463 43.1468 199.483 43.5303C199.524 43.9137 199.574 44.3073 199.635 44.7109C199.715 45.0944 199.806 45.4678 199.907 45.8311C200.008 46.1943 200.139 46.5173 200.301 46.7998L209.928 34.0244ZM233.632 59H225.367V26.5771H227.365L230.09 30.4219C231.422 29.2109 232.936 28.2826 234.631 27.6367C236.326 26.9707 238.082 26.6377 239.898 26.6377H247.194V34.8721H239.898C239.031 34.8721 238.213 35.0335 237.446 35.3564C236.679 35.6794 236.013 36.1234 235.448 36.6885C234.883 37.2536 234.439 37.9196 234.116 38.6865C233.793 39.4535 233.632 40.2708 233.632 41.1387V59ZM268.477 59H249.586V50.7656H268.477C269.042 50.7656 269.526 50.5638 269.93 50.1602C270.333 49.7565 270.535 49.2721 270.535 48.707C270.535 48.1217 270.333 47.7383 269.93 47.5566C269.526 47.375 269.042 47.2842 268.477 47.2842H259.879C258.446 47.2842 257.104 47.0117 255.853 46.4668C254.601 45.9219 253.511 45.1852 252.583 44.2568C251.655 43.3083 250.918 42.2083 250.373 40.957C249.848 39.7057 249.586 38.3636 249.586 36.9307C249.586 35.4977 249.848 34.1556 250.373 32.9043C250.918 31.653 251.655 30.5632 252.583 29.6348C253.511 28.7064 254.601 27.9798 255.853 27.4551C257.104 26.9102 258.446 26.6377 259.879 26.6377H276.62V34.8721H259.879C259.314 34.8721 258.829 35.0739 258.426 35.4775C258.022 35.8812 257.82 36.3656 257.82 36.9307C257.82 37.516 258.022 38.0205 258.426 38.4443C258.829 38.848 259.314 39.0498 259.879 39.0498H268.477C269.889 39.0498 271.221 39.292 272.473 39.7764C273.724 40.2406 274.814 40.8965 275.742 41.7441C276.671 42.5918 277.407 43.611 277.952 44.8018C278.497 45.9925 278.77 47.2943 278.77 48.707C278.77 50.14 278.497 51.4821 277.952 52.7334C277.407 53.9645 276.671 55.0544 275.742 56.0029C274.814 56.9313 273.724 57.668 272.473 58.2129C271.221 58.7376 269.889 59 268.477 59Z"
                />
                <path className={size} fillRule="evenodd" clipRule="evenodd" d="M51 27.6495C47.5733 34.8553 40.2874 39.8291 31.853 39.8291C20.1255 39.8291 10.6185 30.2132 10.6185 18.3515C10.6185 10.5787 14.7007 3.77033 20.815 0C8.96654 2.24482 0 12.7621 0 25.3977C0 39.6688 11.4382 51.2379 25.5479 51.2379C38.9074 51.2379 49.872 40.8662 51 27.6495Z"
                />
                <path className={size} fillRule="evenodd" clipRule="evenodd" d="M61.0817 59.2174C55.2339 64.0972 46.9991 65.3556 39.8032 61.7393C29.7987 56.7114 25.5908 44.1649 30.4047 33.7158C33.5584 26.8702 39.8018 22.6232 46.5461 21.9217C35.5287 18.8223 23.6138 24.243 18.4866 35.3723C12.6949 47.9439 17.7575 63.0389 29.7942 69.088C41.1921 74.8161 54.7564 70.3789 61.0817 59.2174Z"
                />
            </svg>
        </a>
    );
}

export default Logo;


