import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ?image=<image>
    const image = searchParams.get('image');

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex'
          }}
        >
          <img src={`${image}`} width="100%" height="100%" style={{objectFit: "cover", objectPosition: "center"}}/>
          <svg viewBox="0 0 256 256" width="128" height="128" style={{color: "white", position: "absolute", left: 24, bottom: 24}}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M218.964 108H227.129C218.036 61.2725 176.887 26 127.5 26C78.1129 26 36.9642 61.2725 27.8713 108H36.0364C45.006 65.7213 82.5486 34 127.5 34C172.451 34 209.994 65.7213 218.964 108ZM36.0364 147H27.8713C36.9642 193.727 78.1129 229 127.5 229C176.887 229 218.036 193.727 227.129 147H218.964C209.994 189.279 172.451 221 127.5 221C82.5486 221 45.006 189.279 36.0364 147ZM215.894 147C206.976 187.609 170.787 218 127.5 218C84.2129 218 48.024 187.609 39.1061 147H42.1808C51.0433 185.939 85.8778 215 127.5 215C169.122 215 203.957 185.939 212.819 147H215.894ZM39.1061 108H42.1808C51.0433 69.0615 85.8778 40 127.5 40C169.122 40 203.957 69.0615 212.819 108H215.894C206.976 67.391 170.787 37 127.5 37C84.2129 37 48.024 67.391 39.1061 108Z"
              fill="currentColor"
            />
            <path
              d="M40.654 112.264C40.542 113.664 40.458 115.022 40.402 116.338C40.374 117.626 40.36 118.62 40.36 119.32C40.36 119.908 40.374 120.468 40.402 121C40.43 121.532 40.458 121.98 40.486 122.344H39.52C39.044 120.02 38.386 118.2 37.546 116.884C36.706 115.54 35.782 114.602 34.774 114.07C33.794 113.51 32.8 113.23 31.792 113.23H31.246C30.518 113.23 29.972 113.3 29.608 113.44C29.244 113.552 28.992 113.79 28.852 114.154C28.74 114.518 28.684 115.092 28.684 115.876V137.128C28.684 138.248 28.796 139.102 29.02 139.69C29.272 140.25 29.734 140.614 30.406 140.782C31.078 140.95 32.058 141.034 33.346 141.034V142C32.394 141.972 31.148 141.944 29.608 141.916C28.068 141.888 26.43 141.874 24.694 141.874C23.406 141.874 22.118 141.888 20.83 141.916C19.542 141.944 18.324 141.972 17.176 142V141.16C18.044 141.104 18.688 140.992 19.108 140.824C19.528 140.656 19.808 140.32 19.948 139.816C20.088 139.312 20.158 138.556 20.158 137.548V116.716C20.158 115.68 20.088 114.924 19.948 114.448C19.808 113.944 19.514 113.608 19.066 113.44C18.646 113.244 18.016 113.132 17.176 113.104V112.264C18.408 112.292 19.71 112.32 21.082 112.348C22.482 112.348 23.854 112.362 25.198 112.39C26.57 112.39 27.83 112.39 28.978 112.39C30.154 112.39 31.12 112.39 31.876 112.39C33.164 112.39 34.62 112.39 36.244 112.39C37.896 112.362 39.366 112.32 40.654 112.264ZM34.564 126.628C34.564 126.628 34.564 126.768 34.564 127.048C34.564 127.328 34.564 127.468 34.564 127.468H27.424C27.424 127.468 27.424 127.328 27.424 127.048C27.424 126.768 27.424 126.628 27.424 126.628H34.564ZM35.782 121.084C35.67 122.68 35.614 123.898 35.614 124.738C35.642 125.578 35.656 126.348 35.656 127.048C35.656 127.748 35.67 128.518 35.698 129.358C35.726 130.198 35.796 131.416 35.908 133.012H34.942C34.774 131.976 34.424 131.038 33.892 130.198C33.388 129.358 32.73 128.7 31.918 128.224C31.106 127.72 30.168 127.468 29.104 127.468V126.628C29.888 126.628 30.602 126.46 31.246 126.124C31.89 125.788 32.45 125.34 32.926 124.78C33.43 124.22 33.836 123.618 34.144 122.974C34.48 122.33 34.704 121.7 34.816 121.084H35.782ZM57.6387 112.264V113.104C56.6867 113.132 55.9587 113.244 55.4547 113.44C54.9787 113.608 54.6567 113.944 54.4887 114.448C54.3207 114.924 54.2367 115.68 54.2367 116.716V138.388C54.2367 139.144 54.2927 139.718 54.4047 140.11C54.5167 140.474 54.7267 140.726 55.0347 140.866C55.3427 140.978 55.7907 141.034 56.3787 141.034H57.7647C58.4927 141.034 59.2767 140.754 60.1167 140.194C60.9567 139.634 61.7687 138.864 62.5527 137.884C63.3647 136.904 64.0647 135.798 64.6527 134.566C65.2407 133.306 65.6607 132.004 65.9127 130.66H66.8787C66.7947 131.668 66.7527 132.956 66.7527 134.524C66.7527 135.252 66.7667 136.316 66.7947 137.716C66.8227 139.088 66.9067 140.516 67.0467 142C65.6187 141.944 64.0087 141.916 62.2167 141.916C60.4247 141.888 58.8287 141.874 57.4287 141.874C56.6727 141.874 55.7067 141.874 54.5307 141.874C53.3827 141.874 52.1227 141.888 50.7507 141.916C49.4067 141.916 48.0347 141.93 46.6347 141.958C45.2627 141.958 43.9607 141.972 42.7287 142V141.16C43.5967 141.104 44.2407 140.992 44.6607 140.824C45.0807 140.656 45.3607 140.32 45.5007 139.816C45.6407 139.312 45.7107 138.556 45.7107 137.548V116.716C45.7107 115.68 45.6407 114.924 45.5007 114.448C45.3607 113.944 45.0667 113.608 44.6187 113.44C44.1987 113.244 43.5687 113.132 42.7287 113.104V112.264C43.5407 112.292 44.6047 112.32 45.9207 112.348C47.2647 112.376 48.6927 112.39 50.2047 112.39C51.6047 112.39 52.9767 112.376 54.3207 112.348C55.6647 112.32 56.7707 112.292 57.6387 112.264ZM85.2318 111.676C88.3958 111.676 91.1678 112.278 93.5478 113.482C95.9278 114.686 97.7758 116.422 99.0918 118.69C100.408 120.93 101.066 123.66 101.066 126.88C101.066 130.016 100.394 132.76 99.0498 135.112C97.7058 137.464 95.8298 139.298 93.4218 140.614C91.0418 141.93 88.2978 142.588 85.1898 142.588C82.0258 142.588 79.2538 141.986 76.8738 140.782C74.4938 139.578 72.6458 137.842 71.3298 135.574C70.0138 133.306 69.3558 130.576 69.3558 127.384C69.3558 124.248 70.0278 121.504 71.3718 119.152C72.7438 116.8 74.6198 114.966 76.9998 113.65C79.3798 112.334 82.1238 111.676 85.2318 111.676ZM85.0638 112.432C83.6638 112.432 82.4458 113.062 81.4098 114.322C80.3738 115.582 79.5758 117.318 79.0158 119.53C78.4558 121.742 78.1758 124.304 78.1758 127.216C78.1758 130.184 78.4978 132.774 79.1418 134.986C79.7858 137.17 80.6538 138.864 81.7458 140.068C82.8378 141.244 84.0418 141.832 85.3578 141.832C86.7578 141.832 87.9758 141.202 89.0118 139.942C90.0478 138.682 90.8458 136.946 91.4058 134.734C91.9658 132.494 92.2458 129.932 92.2458 127.048C92.2458 124.052 91.9238 121.462 91.2798 119.278C90.6358 117.094 89.7678 115.414 88.6758 114.238C87.5838 113.034 86.3798 112.432 85.0638 112.432ZM130.981 112.264V113.104C130.141 113.272 129.497 113.566 129.049 113.986C128.629 114.406 128.349 115.064 128.209 115.96C128.069 116.828 127.999 118.06 127.999 119.656V129.778C127.999 131.514 127.873 133.152 127.621 134.692C127.397 136.232 126.949 137.562 126.277 138.682C125.549 139.886 124.457 140.838 123.001 141.538C121.573 142.238 119.655 142.588 117.247 142.588C115.959 142.588 114.601 142.448 113.173 142.168C111.745 141.888 110.471 141.356 109.351 140.572C108.399 139.872 107.671 139.018 107.167 138.01C106.663 137.002 106.327 135.826 106.159 134.482C105.991 133.138 105.907 131.612 105.907 129.904V116.716C105.907 115.68 105.837 114.924 105.697 114.448C105.557 113.944 105.277 113.608 104.857 113.44C104.437 113.244 103.793 113.132 102.925 113.104V112.264C103.737 112.292 104.801 112.32 106.117 112.348C107.461 112.376 108.861 112.39 110.317 112.39C111.773 112.39 113.173 112.376 114.517 112.348C115.861 112.32 116.967 112.292 117.835 112.264V113.104C116.883 113.132 116.155 113.244 115.651 113.44C115.175 113.608 114.853 113.944 114.685 114.448C114.517 114.924 114.433 115.68 114.433 116.716V133.852C114.433 135.224 114.545 136.386 114.769 137.338C114.993 138.262 115.315 139.004 115.735 139.564C116.183 140.124 116.729 140.53 117.373 140.782C118.045 141.006 118.815 141.118 119.683 141.118C121.559 141.118 123.029 140.67 124.093 139.774C125.157 138.85 125.913 137.576 126.361 135.952C126.809 134.3 127.033 132.396 127.033 130.24V120.496C127.033 118.62 126.949 117.192 126.781 116.212C126.641 115.204 126.277 114.476 125.689 114.028C125.101 113.58 124.135 113.272 122.791 113.104V112.264C123.351 112.292 124.079 112.32 124.975 112.348C125.871 112.376 126.711 112.39 127.495 112.39C128.139 112.39 128.769 112.376 129.385 112.348C130.029 112.32 130.561 112.292 130.981 112.264ZM132.676 112.264C133.488 112.292 134.552 112.32 135.868 112.348C137.212 112.376 138.556 112.39 139.9 112.39C141.3 112.39 142.644 112.376 143.932 112.348C145.22 112.32 146.13 112.306 146.662 112.306C149.518 112.306 151.87 112.572 153.718 113.104C155.594 113.636 156.994 114.448 157.918 115.54C158.842 116.604 159.304 117.962 159.304 119.614C159.304 120.65 159.094 121.658 158.674 122.638C158.254 123.618 157.54 124.514 156.532 125.326C155.524 126.11 154.138 126.74 152.374 127.216C150.638 127.664 148.426 127.888 145.738 127.888H141.706V127.048H145.318C146.746 127.048 147.824 126.74 148.552 126.124C149.308 125.48 149.812 124.64 150.064 123.604C150.344 122.54 150.484 121.364 150.484 120.076C150.484 117.864 150.176 116.156 149.56 114.952C148.972 113.72 147.936 113.104 146.452 113.104C145.5 113.104 144.884 113.342 144.604 113.818C144.324 114.294 144.184 115.26 144.184 116.716V137.548C144.184 138.556 144.254 139.312 144.394 139.816C144.562 140.32 144.856 140.656 145.276 140.824C145.696 140.992 146.326 141.104 147.166 141.16V142C146.354 141.944 145.304 141.916 144.016 141.916C142.756 141.888 141.468 141.874 140.152 141.874C138.64 141.874 137.212 141.888 135.868 141.916C134.552 141.916 133.488 141.944 132.676 142V141.16C133.544 141.104 134.188 140.992 134.608 140.824C135.028 140.656 135.308 140.32 135.448 139.816C135.588 139.312 135.658 138.556 135.658 137.548V116.716C135.658 115.68 135.588 114.924 135.448 114.448C135.308 113.944 135.014 113.608 134.566 113.44C134.146 113.244 133.516 113.132 132.676 113.104V112.264ZM141.454 127.174C142.462 127.202 143.414 127.258 144.31 127.342C145.206 127.426 146.032 127.51 146.788 127.594C147.544 127.65 148.188 127.692 148.72 127.72C151.716 127.86 153.956 128.378 155.44 129.274C156.952 130.17 157.876 131.486 158.212 133.222L159.094 137.59C159.318 138.626 159.57 139.34 159.85 139.732C160.13 140.124 160.508 140.32 160.984 140.32C161.264 140.32 161.502 140.278 161.698 140.194C161.894 140.11 162.09 139.97 162.286 139.774L162.832 140.32C161.964 141.188 161.012 141.776 159.976 142.084C158.968 142.42 157.82 142.588 156.532 142.588C154.712 142.588 153.242 142.266 152.122 141.622C151.002 140.95 150.316 139.76 150.064 138.052L149.434 133.852C149.266 132.704 149.056 131.682 148.804 130.786C148.552 129.89 148.216 129.19 147.796 128.686C147.376 128.154 146.802 127.888 146.074 127.888H141.538L141.454 127.174ZM177.436 112.264V113.104C176.596 113.132 175.952 113.244 175.504 113.44C175.084 113.608 174.804 113.944 174.664 114.448C174.524 114.924 174.454 115.68 174.454 116.716V137.548C174.454 138.556 174.524 139.312 174.664 139.816C174.832 140.32 175.126 140.656 175.546 140.824C175.966 140.992 176.596 141.104 177.436 141.16V142C176.624 141.944 175.574 141.916 174.286 141.916C173.026 141.888 171.738 141.874 170.422 141.874C168.91 141.874 167.482 141.888 166.138 141.916C164.822 141.916 163.758 141.944 162.946 142V141.16C163.814 141.104 164.458 140.992 164.878 140.824C165.298 140.656 165.578 140.32 165.718 139.816C165.858 139.312 165.928 138.556 165.928 137.548V116.716C165.928 115.68 165.858 114.924 165.718 114.448C165.578 113.944 165.284 113.608 164.836 113.44C164.416 113.244 163.786 113.132 162.946 113.104V112.264C163.758 112.292 164.822 112.32 166.138 112.348C167.482 112.376 168.91 112.39 170.422 112.39C171.738 112.39 173.026 112.376 174.286 112.348C175.574 112.32 176.624 112.292 177.436 112.264ZM191.311 111.676C193.131 111.676 194.545 111.858 195.553 112.222C196.561 112.586 197.415 112.964 198.115 113.356C198.451 113.552 198.717 113.706 198.913 113.818C199.137 113.902 199.347 113.944 199.543 113.944C199.823 113.944 200.019 113.79 200.131 113.482C200.271 113.174 200.383 112.712 200.467 112.096H201.433C201.405 112.684 201.363 113.37 201.307 114.154C201.279 114.938 201.251 115.974 201.223 117.262C201.223 118.55 201.223 120.244 201.223 122.344H200.257C200.145 120.804 199.781 119.306 199.165 117.85C198.577 116.394 197.751 115.19 196.687 114.238C195.651 113.286 194.405 112.81 192.949 112.81C191.717 112.81 190.695 113.146 189.883 113.818C189.071 114.49 188.665 115.456 188.665 116.716C188.665 117.752 188.917 118.648 189.421 119.404C189.925 120.132 190.709 120.902 191.773 121.714C192.865 122.526 194.293 123.548 196.057 124.78C197.317 125.648 198.451 126.516 199.459 127.384C200.495 128.252 201.321 129.232 201.937 130.324C202.553 131.416 202.861 132.732 202.861 134.272C202.861 136.148 202.329 137.702 201.265 138.934C200.229 140.166 198.843 141.09 197.107 141.706C195.371 142.294 193.481 142.588 191.437 142.588C189.533 142.588 188.007 142.42 186.859 142.084C185.739 141.748 184.787 141.398 184.003 141.034C183.387 140.642 182.911 140.446 182.575 140.446C182.295 140.446 182.085 140.6 181.945 140.908C181.833 141.216 181.735 141.678 181.651 142.294H180.685C180.741 141.566 180.769 140.726 180.769 139.774C180.797 138.794 180.811 137.534 180.811 135.994C180.839 134.454 180.853 132.494 180.853 130.114H181.819C181.931 132.074 182.239 133.908 182.743 135.616C183.275 137.324 184.073 138.71 185.137 139.774C186.229 140.81 187.671 141.328 189.463 141.328C190.499 141.328 191.381 141.174 192.109 140.866C192.865 140.53 193.453 140.054 193.873 139.438C194.293 138.822 194.503 138.08 194.503 137.212C194.503 136.036 194.237 135.014 193.705 134.146C193.173 133.25 192.445 132.424 191.521 131.668C190.625 130.884 189.575 130.1 188.371 129.316C187.055 128.42 185.823 127.524 184.675 126.628C183.527 125.732 182.603 124.724 181.903 123.604C181.231 122.484 180.895 121.154 180.895 119.614C180.895 117.766 181.385 116.268 182.365 115.12C183.345 113.944 184.633 113.076 186.229 112.516C187.825 111.956 189.519 111.676 191.311 111.676ZM223.537 142V141.16C224.405 141.104 225.049 140.992 225.469 140.824C225.889 140.656 226.169 140.32 226.309 139.816C226.449 139.312 226.519 138.556 226.519 137.548V116.716C226.519 115.68 226.449 114.924 226.309 114.448C226.169 113.944 225.875 113.608 225.427 113.44C225.007 113.244 224.377 113.132 223.537 113.104V112.264C224.405 112.292 225.511 112.32 226.855 112.348C228.227 112.376 229.599 112.39 230.971 112.39C232.399 112.39 233.743 112.376 235.003 112.348C236.263 112.32 237.271 112.292 238.027 112.264V113.104C237.187 113.132 236.543 113.244 236.095 113.44C235.675 113.608 235.395 113.944 235.255 114.448C235.115 114.924 235.045 115.68 235.045 116.716V137.548C235.045 138.556 235.115 139.312 235.255 139.816C235.423 140.32 235.717 140.656 236.137 140.824C236.557 140.992 237.187 141.104 238.027 141.16V142C237.271 141.944 236.263 141.916 235.003 141.916C233.743 141.888 232.399 141.874 230.971 141.874C229.599 141.874 228.227 141.888 226.855 141.916C225.511 141.916 224.405 141.944 223.537 142ZM205.561 142V141.16C206.429 141.104 207.073 140.992 207.493 140.824C207.913 140.656 208.193 140.32 208.333 139.816C208.473 139.312 208.543 138.556 208.543 137.548V116.716C208.543 115.68 208.473 114.924 208.333 114.448C208.193 113.944 207.899 113.608 207.451 113.44C207.031 113.244 206.401 113.132 205.561 113.104V112.264C206.373 112.292 207.437 112.32 208.753 112.348C210.097 112.376 211.525 112.39 213.037 112.39C214.353 112.39 215.641 112.376 216.901 112.348C218.189 112.32 219.239 112.292 220.051 112.264V113.104C219.211 113.132 218.567 113.244 218.119 113.44C217.699 113.608 217.419 113.944 217.279 114.448C217.139 114.924 217.069 115.68 217.069 116.716V137.548C217.069 138.556 217.139 139.312 217.279 139.816C217.447 140.32 217.741 140.656 218.161 140.824C218.581 140.992 219.211 141.104 220.051 141.16V142C219.239 141.944 218.189 141.916 216.901 141.916C215.641 141.888 214.353 141.874 213.037 141.874C211.525 141.874 210.097 141.888 208.753 141.916C207.437 141.916 206.373 141.944 205.561 142ZM213.499 127.468V126.628H230.089V127.468H213.499Z"
              fill="currentColor"
            />
            <path
              d="M88.544 156.672C88.8213 156.683 89.184 156.693 89.632 156.704C90.08 156.715 90.528 156.72 90.976 156.72C91.488 156.72 91.984 156.715 92.464 156.704C92.944 156.693 93.2853 156.688 93.488 156.688C94.8107 156.688 95.7973 156.923 96.448 157.392C97.1093 157.861 97.44 158.464 97.44 159.2C97.44 159.573 97.328 159.952 97.104 160.336C96.88 160.72 96.5333 161.061 96.064 161.36C95.5947 161.659 94.9867 161.877 94.24 162.016V162.048C95.2427 162.123 96.0373 162.304 96.624 162.592C97.2107 162.88 97.632 163.227 97.888 163.632C98.144 164.037 98.272 164.459 98.272 164.896C98.272 165.568 98.096 166.133 97.744 166.592C97.392 167.051 96.8853 167.403 96.224 167.648C95.5627 167.883 94.7733 168 93.856 168C93.6 168 93.232 167.995 92.752 167.984C92.272 167.963 91.6907 167.952 91.008 167.952C90.5387 167.952 90.08 167.957 89.632 167.968C89.184 167.968 88.8213 167.979 88.544 168V167.68C88.8853 167.659 89.1413 167.616 89.312 167.552C89.4827 167.488 89.5947 167.36 89.648 167.168C89.712 166.976 89.744 166.688 89.744 166.304V158.368C89.744 157.973 89.712 157.685 89.648 157.504C89.5947 157.312 89.4773 157.184 89.296 157.12C89.1253 157.045 88.8747 157.003 88.544 156.992V156.672ZM93.28 156.992C92.864 156.992 92.592 157.083 92.464 157.264C92.3467 157.445 92.288 157.813 92.288 158.368V166.304C92.288 166.677 92.3147 166.96 92.368 167.152C92.432 167.344 92.5387 167.472 92.688 167.536C92.848 167.6 93.0827 167.632 93.392 167.632C94.16 167.632 94.72 167.392 95.072 166.912C95.4347 166.421 95.616 165.728 95.616 164.832C95.616 164.011 95.408 163.376 94.992 162.928C94.5867 162.48 93.9093 162.256 92.96 162.256H91.6C91.6 162.256 91.6 162.213 91.6 162.128C91.6 162.032 91.6 161.984 91.6 161.984H92.976C93.4773 161.984 93.8613 161.867 94.128 161.632C94.3947 161.387 94.5813 161.067 94.688 160.672C94.7947 160.267 94.848 159.835 94.848 159.376C94.848 158.587 94.7253 157.995 94.48 157.6C94.2347 157.195 93.8347 156.992 93.28 156.992ZM101.342 168.112C100.862 168.112 100.462 168.021 100.142 167.84C99.822 167.659 99.5873 167.419 99.438 167.12C99.2887 166.811 99.214 166.475 99.214 166.112C99.214 165.653 99.3153 165.28 99.518 164.992C99.7313 164.704 100.003 164.469 100.334 164.288C100.665 164.107 101.011 163.957 101.374 163.84C101.747 163.723 102.099 163.611 102.43 163.504C102.771 163.387 103.043 163.253 103.246 163.104C103.459 162.944 103.566 162.741 103.566 162.496V161.248C103.566 160.971 103.518 160.725 103.422 160.512C103.337 160.288 103.198 160.117 103.006 160C102.825 159.883 102.585 159.824 102.286 159.824C102.073 159.824 101.859 159.856 101.646 159.92C101.433 159.973 101.257 160.069 101.118 160.208C101.417 160.315 101.646 160.48 101.806 160.704C101.977 160.917 102.062 161.163 102.062 161.44C102.062 161.803 101.934 162.091 101.678 162.304C101.433 162.517 101.139 162.624 100.798 162.624C100.414 162.624 100.121 162.507 99.918 162.272C99.726 162.027 99.63 161.733 99.63 161.392C99.63 161.083 99.7047 160.827 99.854 160.624C100.014 160.421 100.233 160.229 100.51 160.048C100.809 159.877 101.166 159.744 101.582 159.648C102.009 159.552 102.467 159.504 102.958 159.504C103.449 159.504 103.891 159.557 104.286 159.664C104.681 159.76 105.011 159.941 105.278 160.208C105.523 160.453 105.683 160.757 105.758 161.12C105.833 161.472 105.87 161.92 105.87 162.464V166.816C105.87 167.083 105.897 167.269 105.95 167.376C106.003 167.472 106.094 167.52 106.222 167.52C106.318 167.52 106.409 167.493 106.494 167.44C106.59 167.387 106.691 167.323 106.798 167.248L106.958 167.52C106.734 167.712 106.473 167.861 106.174 167.968C105.886 168.064 105.561 168.112 105.198 168.112C104.803 168.112 104.489 168.059 104.254 167.952C104.019 167.835 103.849 167.68 103.742 167.488C103.646 167.296 103.598 167.072 103.598 166.816C103.342 167.221 103.033 167.541 102.67 167.776C102.307 168 101.865 168.112 101.342 168.112ZM102.478 167.088C102.691 167.088 102.883 167.04 103.054 166.944C103.235 166.837 103.406 166.667 103.566 166.432V163.152C103.47 163.312 103.337 163.456 103.166 163.584C102.995 163.712 102.814 163.845 102.622 163.984C102.43 164.112 102.243 164.256 102.062 164.416C101.891 164.576 101.753 164.773 101.646 165.008C101.539 165.243 101.486 165.525 101.486 165.856C101.486 166.272 101.577 166.581 101.758 166.784C101.939 166.987 102.179 167.088 102.478 167.088ZM110.663 155.472V166.512C110.663 166.96 110.733 167.264 110.871 167.424C111.021 167.584 111.271 167.664 111.623 167.664V168C111.421 167.989 111.122 167.979 110.727 167.968C110.343 167.947 109.949 167.936 109.543 167.936C109.127 167.936 108.706 167.947 108.279 167.968C107.863 167.979 107.549 167.989 107.335 168V167.664C107.709 167.664 107.97 167.584 108.119 167.424C108.279 167.264 108.359 166.96 108.359 166.512V157.392C108.359 156.912 108.285 156.56 108.135 156.336C107.997 156.101 107.73 155.984 107.335 155.984V155.648C107.677 155.68 108.007 155.696 108.327 155.696C108.765 155.696 109.181 155.68 109.575 155.648C109.97 155.605 110.333 155.547 110.663 155.472ZM115.879 159.728V160.048C115.549 160.112 115.218 160.251 114.887 160.464C114.557 160.677 114.221 160.949 113.879 161.28L112.647 162.56L112.807 162.256L115.543 166.832C115.661 167.024 115.783 167.195 115.911 167.344C116.039 167.493 116.194 167.6 116.375 167.664V168C116.215 167.989 115.975 167.979 115.655 167.968C115.335 167.947 115.015 167.936 114.695 167.936C114.301 167.936 113.906 167.947 113.511 167.968C113.117 167.979 112.823 167.989 112.631 168V167.664C112.845 167.664 112.989 167.616 113.063 167.52C113.138 167.413 113.127 167.28 113.031 167.12L111.447 164.256C111.319 164.053 111.191 163.925 111.063 163.872C110.946 163.808 110.786 163.771 110.583 163.76V163.456C110.807 163.435 110.999 163.397 111.159 163.344C111.33 163.291 111.485 163.189 111.623 163.04L112.839 161.856C113.202 161.515 113.383 161.211 113.383 160.944C113.383 160.677 113.266 160.464 113.031 160.304C112.807 160.144 112.509 160.059 112.135 160.048V159.728C112.434 159.739 112.759 159.749 113.111 159.76C113.463 159.771 113.762 159.776 114.007 159.776C114.221 159.776 114.445 159.776 114.679 159.776C114.925 159.765 115.154 159.76 115.367 159.76C115.581 159.749 115.751 159.739 115.879 159.728ZM120.528 159.504C121.466 159.504 122.202 159.781 122.736 160.336C123.269 160.891 123.536 161.797 123.536 163.056H118.272L118.24 162.752H121.52C121.53 162.229 121.498 161.749 121.424 161.312C121.349 160.864 121.232 160.507 121.072 160.24C120.912 159.973 120.698 159.84 120.432 159.84C120.058 159.84 119.738 160.075 119.472 160.544C119.216 161.013 119.061 161.792 119.008 162.88L119.056 162.976C119.045 163.104 119.034 163.237 119.024 163.376C119.024 163.515 119.024 163.659 119.024 163.808C119.024 164.544 119.125 165.141 119.328 165.6C119.541 166.059 119.808 166.395 120.128 166.608C120.448 166.811 120.773 166.912 121.104 166.912C121.328 166.912 121.557 166.88 121.792 166.816C122.037 166.741 122.282 166.613 122.528 166.432C122.773 166.24 123.002 165.973 123.216 165.632L123.504 165.728C123.376 166.133 123.173 166.528 122.896 166.912C122.618 167.296 122.266 167.611 121.84 167.856C121.413 168.101 120.901 168.224 120.304 168.224C119.578 168.224 118.938 168.069 118.384 167.76C117.829 167.451 117.392 166.981 117.072 166.352C116.762 165.723 116.608 164.923 116.608 163.952C116.608 162.96 116.773 162.133 117.104 161.472C117.445 160.811 117.909 160.32 118.496 160C119.093 159.669 119.77 159.504 120.528 159.504ZM129.872 159.504C130.214 159.504 130.491 159.579 130.704 159.728C130.918 159.867 131.072 160.048 131.168 160.272C131.275 160.496 131.328 160.731 131.328 160.976C131.328 161.371 131.211 161.696 130.976 161.952C130.752 162.197 130.454 162.32 130.08 162.32C129.707 162.32 129.414 162.229 129.2 162.048C128.998 161.856 128.896 161.605 128.896 161.296C128.896 160.997 128.96 160.752 129.088 160.56C129.227 160.357 129.398 160.187 129.6 160.048C129.451 160.005 129.302 160.011 129.152 160.064C128.95 160.096 128.758 160.181 128.576 160.32C128.395 160.448 128.24 160.613 128.112 160.816C127.984 161.008 127.883 161.221 127.808 161.456C127.734 161.68 127.696 161.899 127.696 162.112V166.352C127.696 166.864 127.819 167.211 128.064 167.392C128.32 167.573 128.699 167.664 129.2 167.664V168C128.955 167.989 128.598 167.979 128.128 167.968C127.659 167.947 127.168 167.936 126.656 167.936C126.23 167.936 125.798 167.947 125.36 167.968C124.923 167.979 124.592 167.989 124.368 168V167.664C124.742 167.664 125.003 167.584 125.152 167.424C125.312 167.264 125.392 166.96 125.392 166.512V161.472C125.392 160.992 125.318 160.64 125.168 160.416C125.03 160.181 124.763 160.064 124.368 160.064V159.728C124.71 159.76 125.04 159.776 125.36 159.776C125.808 159.776 126.224 159.76 126.608 159.728C127.003 159.685 127.366 159.627 127.696 159.552V161.04C127.824 160.752 127.995 160.491 128.208 160.256C128.422 160.021 128.667 159.84 128.944 159.712C129.222 159.573 129.531 159.504 129.872 159.504ZM139.661 159.728V160.048C139.458 160.101 139.266 160.229 139.085 160.432C138.904 160.624 138.728 160.955 138.557 161.424L136.301 167.76L135.709 168.88L132.221 160.96C132.04 160.544 131.858 160.293 131.677 160.208C131.506 160.112 131.357 160.064 131.229 160.064V159.728C131.581 159.76 131.944 159.787 132.317 159.808C132.701 159.819 133.069 159.824 133.421 159.824C133.858 159.824 134.258 159.813 134.621 159.792C134.984 159.771 135.325 159.749 135.645 159.728V160.064C135.432 160.064 135.229 160.08 135.037 160.112C134.856 160.133 134.728 160.208 134.653 160.336C134.589 160.453 134.621 160.661 134.749 160.96L136.765 165.824L136.621 165.92L137.805 162.608C138.008 162.032 138.093 161.563 138.061 161.2C138.029 160.827 137.912 160.549 137.709 160.368C137.506 160.176 137.229 160.069 136.877 160.048V159.728C137.048 159.739 137.224 159.749 137.405 159.76C137.586 159.76 137.768 159.765 137.949 159.776C138.13 159.776 138.29 159.776 138.429 159.776C138.642 159.776 138.866 159.771 139.101 159.76C139.336 159.749 139.522 159.739 139.661 159.728ZM136.301 167.76L135.693 169.472C135.586 169.739 135.474 169.963 135.357 170.144C135.25 170.336 135.128 170.491 134.989 170.608C134.84 170.736 134.648 170.832 134.413 170.896C134.178 170.971 133.906 171.008 133.597 171.008C133.341 171.008 133.074 170.965 132.797 170.88C132.53 170.795 132.306 170.656 132.125 170.464C131.944 170.272 131.853 170.027 131.853 169.728C131.853 169.397 131.97 169.131 132.205 168.928C132.44 168.736 132.749 168.64 133.133 168.64C133.485 168.64 133.773 168.725 133.997 168.896C134.221 169.067 134.333 169.317 134.333 169.648C134.333 169.861 134.264 170.064 134.125 170.256C133.997 170.448 133.8 170.592 133.533 170.688C133.586 170.699 133.65 170.704 133.725 170.704C133.8 170.704 133.858 170.704 133.901 170.704C134.221 170.704 134.504 170.603 134.749 170.4C134.994 170.197 135.197 169.877 135.357 169.44L135.917 167.792L136.301 167.76ZM149.383 156.448C150.087 156.448 150.663 156.555 151.111 156.768C151.57 156.971 151.975 157.211 152.327 157.488C152.541 157.648 152.701 157.669 152.807 157.552C152.925 157.424 153.005 157.131 153.047 156.672H153.415C153.394 157.088 153.378 157.595 153.367 158.192C153.357 158.779 153.351 159.563 153.351 160.544H152.983C152.93 160.053 152.861 159.637 152.775 159.296C152.69 158.944 152.573 158.635 152.423 158.368C152.274 158.101 152.061 157.861 151.783 157.648C151.517 157.381 151.207 157.184 150.855 157.056C150.503 156.928 150.135 156.864 149.751 156.864C149.175 156.864 148.685 157.019 148.279 157.328C147.874 157.627 147.543 158.037 147.287 158.56C147.042 159.083 146.861 159.675 146.743 160.336C146.626 160.987 146.567 161.664 146.567 162.368C146.567 163.083 146.626 163.771 146.743 164.432C146.871 165.083 147.063 165.664 147.319 166.176C147.586 166.688 147.927 167.093 148.343 167.392C148.759 167.691 149.25 167.84 149.815 167.84C150.167 167.84 150.519 167.776 150.871 167.648C151.234 167.509 151.543 167.312 151.799 167.056C152.215 166.736 152.498 166.341 152.647 165.872C152.797 165.392 152.909 164.757 152.983 163.968H153.351C153.351 164.981 153.357 165.803 153.367 166.432C153.378 167.051 153.394 167.573 153.415 168H153.047C153.005 167.541 152.93 167.253 152.823 167.136C152.727 167.019 152.562 167.035 152.327 167.184C151.933 167.461 151.511 167.707 151.063 167.92C150.626 168.123 150.061 168.224 149.367 168.224C148.237 168.224 147.245 167.995 146.391 167.536C145.549 167.077 144.893 166.416 144.423 165.552C143.954 164.688 143.719 163.648 143.719 162.432C143.719 161.237 143.959 160.192 144.439 159.296C144.93 158.4 145.597 157.701 146.439 157.2C147.293 156.699 148.274 156.448 149.383 156.448ZM158.825 159.504C159.603 159.504 160.286 159.648 160.873 159.936C161.459 160.224 161.918 160.688 162.249 161.328C162.579 161.968 162.745 162.816 162.745 163.872C162.745 164.928 162.579 165.776 162.249 166.416C161.918 167.045 161.459 167.504 160.873 167.792C160.286 168.08 159.603 168.224 158.825 168.224C158.067 168.224 157.39 168.08 156.793 167.792C156.206 167.504 155.742 167.045 155.401 166.416C155.07 165.776 154.905 164.928 154.905 163.872C154.905 162.816 155.07 161.968 155.401 161.328C155.742 160.688 156.206 160.224 156.793 159.936C157.39 159.648 158.067 159.504 158.825 159.504ZM158.825 159.824C158.398 159.824 158.041 160.144 157.753 160.784C157.465 161.413 157.321 162.443 157.321 163.872C157.321 165.301 157.465 166.331 157.753 166.96C158.041 167.589 158.398 167.904 158.825 167.904C159.262 167.904 159.619 167.589 159.897 166.96C160.185 166.331 160.329 165.301 160.329 163.872C160.329 162.443 160.185 161.413 159.897 160.784C159.619 160.144 159.262 159.824 158.825 159.824ZM165.519 165.76C165.935 165.76 166.266 165.872 166.511 166.096C166.757 166.309 166.879 166.608 166.879 166.992C166.879 167.376 166.757 167.68 166.511 167.904C166.266 168.117 165.935 168.224 165.519 168.224C165.103 168.224 164.773 168.117 164.527 167.904C164.282 167.68 164.159 167.376 164.159 166.992C164.159 166.608 164.282 166.309 164.527 166.096C164.773 165.872 165.103 165.76 165.519 165.76Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M118 191.157H88V190.157H118V191.157Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M131.9 190.657L127.657 186.414L123.414 190.657L127.657 194.899L131.9 190.657ZM127.657 185L122 190.657L127.657 196.314L133.314 190.657L127.657 185Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M167.314 191.157H137.314V190.157H167.314V191.157Z"
              fill="currentColor"
            />
            <path
              d="M91.7585 102V93.2727H97.6392V94.794H93.6037V96.8736H97.3366V98.3949H93.6037V100.479H97.6562V102H91.7585ZM104.518 97.321L102.856 97.4233C102.828 97.2812 102.767 97.1534 102.673 97.0398C102.579 96.9233 102.456 96.831 102.302 96.7628C102.152 96.6918 101.971 96.6562 101.761 96.6562C101.48 96.6562 101.243 96.7159 101.049 96.8352C100.856 96.9517 100.76 97.108 100.76 97.304C100.76 97.4602 100.822 97.5923 100.947 97.7003C101.072 97.8082 101.287 97.8949 101.591 97.9602L102.775 98.1989C103.412 98.3295 103.886 98.5398 104.199 98.8295C104.511 99.1193 104.667 99.5 104.667 99.9716C104.667 100.401 104.541 100.777 104.288 101.101C104.038 101.425 103.694 101.678 103.257 101.859C102.822 102.038 102.321 102.128 101.752 102.128C100.886 102.128 100.196 101.947 99.6815 101.587C99.1701 101.223 98.8704 100.729 98.7823 100.104L100.568 100.01C100.622 100.274 100.752 100.476 100.96 100.615C101.167 100.751 101.433 100.82 101.757 100.82C102.075 100.82 102.331 100.759 102.524 100.636C102.72 100.511 102.819 100.351 102.822 100.155C102.819 99.9901 102.75 99.8551 102.613 99.75C102.477 99.642 102.267 99.5597 101.983 99.5028L100.849 99.277C100.21 99.1491 99.734 98.9276 99.4215 98.6122C99.1119 98.2969 98.957 97.8949 98.957 97.4062C98.957 96.9858 99.0707 96.6236 99.2979 96.3196C99.5281 96.0156 99.8505 95.7812 100.265 95.6165C100.683 95.4517 101.172 95.3693 101.731 95.3693C102.558 95.3693 103.208 95.544 103.683 95.8935C104.16 96.2429 104.439 96.7187 104.518 97.321ZM109.292 95.4545V96.8182H105.35V95.4545H109.292ZM106.245 93.8864H108.06V99.9886C108.06 100.156 108.086 100.287 108.137 100.381C108.188 100.472 108.259 100.536 108.35 100.572C108.444 100.609 108.552 100.628 108.674 100.628C108.759 100.628 108.844 100.621 108.93 100.607C109.015 100.589 109.08 100.577 109.126 100.568L109.411 101.919C109.32 101.947 109.192 101.98 109.028 102.017C108.863 102.057 108.663 102.081 108.427 102.089C107.989 102.107 107.606 102.048 107.276 101.915C106.95 101.781 106.695 101.574 106.513 101.293C106.332 101.011 106.242 100.656 106.245 100.227V93.8864ZM111.536 102.111C111.254 102.111 111.013 102.011 110.811 101.812C110.612 101.611 110.513 101.369 110.513 101.088C110.513 100.81 110.612 100.571 110.811 100.372C111.013 100.173 111.254 100.074 111.536 100.074C111.808 100.074 112.047 100.173 112.251 100.372C112.456 100.571 112.558 100.81 112.558 101.088C112.558 101.276 112.51 101.447 112.413 101.604C112.32 101.757 112.196 101.881 112.043 101.974C111.889 102.065 111.72 102.111 111.536 102.111Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M125.243 97.5001L123.828 96.0858L122.414 97.5001L123.828 98.9143L125.243 97.5001ZM123.828 94.6716L121 97.5001L123.828 100.328L126.657 97.5001L123.828 94.6716Z"
              fill="currentColor"
            />
            <path
              d="M135.364 102V100.67L138.471 97.794C138.735 97.5384 138.957 97.3082 139.136 97.1037C139.317 96.8991 139.455 96.6989 139.549 96.5028C139.643 96.304 139.69 96.0895 139.69 95.8594C139.69 95.6037 139.631 95.3835 139.515 95.1989C139.398 95.0114 139.239 94.8679 139.038 94.7685C138.836 94.6662 138.607 94.6151 138.351 94.6151C138.084 94.6151 137.851 94.669 137.653 94.777C137.454 94.8849 137.3 95.0398 137.192 95.2415C137.084 95.4432 137.03 95.6832 137.03 95.9616H135.279C135.279 95.3906 135.408 94.8949 135.667 94.4744C135.925 94.054 136.288 93.7287 136.753 93.4986C137.219 93.2685 137.756 93.1534 138.364 93.1534C138.989 93.1534 139.533 93.2642 139.996 93.4858C140.462 93.7045 140.824 94.0085 141.083 94.3977C141.342 94.7869 141.471 95.233 141.471 95.7358C141.471 96.0653 141.405 96.3906 141.275 96.7116C141.147 97.0327 140.918 97.3892 140.589 97.7812C140.259 98.1705 139.795 98.6378 139.195 99.1832L137.921 100.432V100.491H141.586V102H135.364ZM146.345 102.192C145.612 102.189 144.981 102.009 144.453 101.651C143.927 101.293 143.522 100.774 143.238 100.095C142.957 99.4162 142.818 98.5994 142.821 97.6449C142.821 96.6932 142.961 95.8821 143.242 95.2116C143.527 94.5412 143.931 94.0312 144.457 93.6818C144.985 93.3295 145.615 93.1534 146.345 93.1534C147.075 93.1534 147.703 93.3295 148.228 93.6818C148.757 94.0341 149.163 94.5455 149.447 95.2159C149.731 95.8835 149.872 96.6932 149.869 97.6449C149.869 98.6023 149.727 99.4205 149.443 100.099C149.161 100.778 148.758 101.297 148.233 101.655C147.707 102.013 147.078 102.192 146.345 102.192ZM146.345 100.662C146.845 100.662 147.244 100.411 147.542 99.9077C147.84 99.4048 147.988 98.6506 147.985 97.6449C147.985 96.983 147.917 96.4318 147.781 95.9915C147.647 95.5511 147.457 95.2202 147.21 94.9986C146.965 94.777 146.677 94.6662 146.345 94.6662C145.848 94.6662 145.45 94.9148 145.152 95.4119C144.853 95.9091 144.703 96.6534 144.7 97.6449C144.7 98.3153 144.767 98.875 144.9 99.3239C145.036 99.7699 145.228 100.105 145.475 100.33C145.723 100.551 146.012 100.662 146.345 100.662ZM154.981 93.2727V102H153.136V95.0241H153.085L151.087 96.277V94.6406L153.247 93.2727H154.981ZM160.405 102.119C159.956 102.116 159.523 102.041 159.105 101.893C158.691 101.746 158.318 101.506 157.989 101.173C157.659 100.841 157.398 100.401 157.205 99.8523C157.014 99.304 156.919 98.6307 156.919 97.8324C156.922 97.0994 157.006 96.4446 157.171 95.8679C157.338 95.2884 157.577 94.7969 157.887 94.3935C158.199 93.9901 158.573 93.6832 159.007 93.473C159.442 93.2599 159.929 93.1534 160.469 93.1534C161.051 93.1534 161.566 93.267 162.012 93.4943C162.458 93.7187 162.816 94.0241 163.085 94.4105C163.358 94.7969 163.523 95.2301 163.58 95.7102H161.76C161.689 95.4062 161.54 95.1676 161.313 94.9943C161.085 94.821 160.804 94.7344 160.469 94.7344C159.901 94.7344 159.469 94.9815 159.174 95.4759C158.881 95.9702 158.732 96.642 158.726 97.4915H158.786C158.916 97.233 159.093 97.0128 159.314 96.831C159.539 96.6463 159.793 96.5057 160.077 96.4091C160.364 96.3097 160.666 96.2599 160.985 96.2599C161.502 96.2599 161.962 96.3821 162.365 96.6264C162.769 96.8679 163.087 97.2003 163.32 97.6236C163.553 98.0469 163.669 98.5312 163.669 99.0767C163.669 99.6676 163.532 100.193 163.256 100.653C162.983 101.114 162.601 101.474 162.11 101.736C161.621 101.994 161.053 102.122 160.405 102.119ZM160.397 100.67C160.681 100.67 160.935 100.602 161.159 100.466C161.384 100.33 161.56 100.145 161.688 99.9119C161.816 99.679 161.88 99.4176 161.88 99.1278C161.88 98.8381 161.816 98.5781 161.688 98.348C161.563 98.1179 161.389 97.9347 161.168 97.7983C160.946 97.6619 160.693 97.5938 160.409 97.5938C160.196 97.5938 159.999 97.6335 159.817 97.7131C159.638 97.7926 159.48 97.9034 159.344 98.0455C159.21 98.1875 159.105 98.3523 159.029 98.5398C158.952 98.7244 158.914 98.9219 158.914 99.1321C158.914 99.4134 158.978 99.6705 159.105 99.9034C159.236 100.136 159.412 100.322 159.634 100.462C159.858 100.601 160.112 100.67 160.397 100.67Z"
              fill="currentColor"
            />
            <ellipse cx="129" cy="154.5" rx="1" ry="0.5" fill="currentColor" />
          </svg>
        </div>


      ),
      {
        width: 1000,
        height: 525,
      },
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
