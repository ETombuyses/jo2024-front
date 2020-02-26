import React, { Component } from 'react'

class ParisMap extends Component {

  constructor(props){
    super(props);
    this.state = {
      arrondissementShapes: [
        [1, 'M165.168 76.5312L161.654 78.2883L155.016 91.5642L173.563 100.35L189.767 111.868L198.357 91.5642L165.168 76.5312Z'],
        [2, 'M195.429 74.1885L167.12 75.9456L199.919 90.0024L204.8 75.9456L195.429 74.1885Z'],
        [3, 'M228.032 107.573L201.285 93.7119L207.337 78.0933L221.004 81.8027L228.032 107.573Z'],
        [4, 'M200.7 95.6641L191.914 113.04L221.98 129.83L228.813 114.406L227.447 109.526L200.7 95.6641Z'],
        [5, 'M179.81 146.035L191.719 114.602L220.418 131.002L223.542 134.906L201.871 152.087L187.619 149.158L179.81 146.035Z'],
        [6, 'M172.391 102.498L167.119 115.773L148.377 129.44L159.115 136.078L178.052 144.473L188.4 112.845L172.391 102.498Z'],
        [7, 'M123.192 91.3691L105.23 103.474L131.392 127.487L145.644 129.244L164.777 115.383L168.877 100.545L151.501 91.3691H123.192Z'],
        [8, 'M123.388 54.8606L161.653 44.7085L159.701 75.5554L151.892 90.0026L123.388 88.4407L113.821 66.3794L123.388 54.8606Z'],
        [9, 'M197.576 44.3179H164.777L161.849 75.1647L165.949 73.7981L195.234 72.2362L197.576 44.3179Z'],
        [10, 'M222.566 41.7798L200.504 43.7321L196.99 72.8219L222.566 80.2407L241.699 70.0886L229.985 43.7321L222.566 41.7798Z'],
        [11, 'M242.089 72.2363L222.761 82.3885L229.594 107.378L230.961 113.235L275.278 124.949L242.089 72.2363Z'],
        [12, 'M223.347 131.782L231.156 115.578L276.255 127.683L305.345 131.782L300.659 153.258L305.345 158.92L316.473 140.373L323.111 142.52L355.129 135.297L385 148.768L383.047 178.248L375.629 196.209H337.168L326.82 185.667L311.202 183.519L285.431 171.024L263.955 179.81L223.347 131.782Z'],
        [13, 'M225.494 136.663L204.018 154.625L189.376 151.501L191.914 202.066L205.385 196.6L210.461 202.066L222.566 200.309L261.417 179.614L225.494 136.663Z'],
        [14, 'M186.643 150.915L159.701 139.396L123.388 181.372L141.74 187.033L171.415 200.309L189.377 203.043L186.643 150.915Z'],
        [15, 'M130.025 129.049L103.278 104.84L61.8887 159.115H69.3075L75.9455 171.024L89.807 165.753L121.044 179.615L156.382 137.444L145.058 131.392L130.025 129.049Z'],
        [16, 'M56.2272 51.7368L48.8083 65.4031L33.5801 60.7175L11.9092 77.8981L1.95233 100.74L0 113.431L37.68 130.806L45.8798 152.477L60.6491 158.215L102.888 102.693L120.849 90.1978L110.502 66.7698L86.8788 55.6415L56.2272 51.7368Z'],
        [17, 'M111.868 64.6223L88.4404 53.6892L95.0784 37.8753L124.754 17.9615L150.525 3.31903L166.729 1.3667L161.848 42.3657L122.411 53.6892L111.868 64.6223Z'],
        [18, 'M230.96 0L169.071 1.56187L164.776 41.3895H199.918L222.37 40.0228L232.913 13.6663L230.96 0Z'],
        [19, 'M274.108 13.6664L262.394 1.56195L232.914 0.195312L234.475 13.6664L224.323 40.4134L231.352 42.1705L243.456 68.9174L295.193 53.494L279.769 42.1705L274.108 13.6664Z'],
        [20, 'M296.364 55.4463L244.432 70.6745L278.597 126.121L304.563 129.635L305.735 123.778L300.268 67.3555L296.364 55.4463Z'],
      ],
      arrondissementNumbers: [
        [1, 'M177.009 96.439H175.598V90.9995L173.913 91.522V90.3745L176.857 89.3198H177.009V96.439Z'],
        [2, 'M197.041 85.1704H192.168V84.2036L194.468 81.7524C194.784 81.4074 195.016 81.1063 195.166 80.8491C195.319 80.592 195.396 80.3478 195.396 80.1167C195.396 79.8009 195.316 79.5535 195.156 79.3745C194.997 79.1922 194.769 79.1011 194.473 79.1011C194.154 79.1011 193.901 79.2118 193.716 79.4331C193.534 79.6512 193.442 79.9393 193.442 80.2974H192.026C192.026 79.8644 192.129 79.4689 192.334 79.1108C192.542 78.7528 192.835 78.4728 193.213 78.271C193.59 78.0659 194.019 77.9634 194.497 77.9634C195.229 77.9634 195.798 78.1392 196.201 78.4907C196.608 78.8423 196.812 79.3387 196.812 79.98C196.812 80.3315 196.72 80.6896 196.538 81.0542C196.356 81.4188 196.043 81.8436 195.601 82.3286L193.984 84.0327H197.041V85.1704Z'],
        [3, 'M212.577 89.5762H213.329C213.687 89.5762 213.952 89.4867 214.125 89.3076C214.298 89.1286 214.384 88.891 214.384 88.5947C214.384 88.3083 214.298 88.0853 214.125 87.9258C213.956 87.7663 213.721 87.6865 213.422 87.6865C213.152 87.6865 212.925 87.7614 212.743 87.9111C212.561 88.0576 212.47 88.2497 212.47 88.4873H211.059C211.059 88.1162 211.158 87.7842 211.356 87.4912C211.558 87.195 211.838 86.9639 212.196 86.7979C212.558 86.6318 212.955 86.5488 213.388 86.5488C214.14 86.5488 214.729 86.7295 215.155 87.0908C215.582 87.4489 215.795 87.9437 215.795 88.5752C215.795 88.9007 215.696 89.2002 215.497 89.4736C215.299 89.7471 215.038 89.957 214.716 90.1035C215.116 90.2467 215.414 90.4616 215.609 90.748C215.808 91.0345 215.907 91.373 215.907 91.7637C215.907 92.3952 215.676 92.9014 215.214 93.2822C214.755 93.6631 214.146 93.8535 213.388 93.8535C212.678 93.8535 212.097 93.6663 211.645 93.292C211.195 92.9176 210.971 92.4229 210.971 91.8076H212.382C212.382 92.0745 212.481 92.2926 212.68 92.4619C212.882 92.6312 213.129 92.7158 213.422 92.7158C213.757 92.7158 214.019 92.6279 214.208 92.4521C214.4 92.2731 214.496 92.0371 214.496 91.7441C214.496 91.0345 214.105 90.6797 213.324 90.6797H212.577V89.5762Z'],
        [4, 'M211.292 113.885H212.098V115.023H211.292V116.561H209.881V115.023H206.966L206.902 114.134L209.866 109.452H211.292V113.885ZM208.309 113.885H209.881V111.375L209.788 111.537L208.309 113.885Z'],
        [5, 'M193.913 135.87L194.323 132.256H198.308V133.433H195.48L195.305 134.961C195.64 134.782 195.996 134.693 196.374 134.693C197.051 134.693 197.582 134.903 197.966 135.323C198.35 135.743 198.542 136.33 198.542 137.085C198.542 137.544 198.444 137.956 198.249 138.321C198.057 138.682 197.78 138.964 197.419 139.166C197.058 139.364 196.631 139.463 196.14 139.463C195.71 139.463 195.311 139.377 194.943 139.205C194.576 139.029 194.284 138.783 194.069 138.467C193.858 138.152 193.745 137.792 193.732 137.388H195.129C195.158 137.684 195.261 137.916 195.437 138.082C195.616 138.244 195.848 138.326 196.135 138.326C196.454 138.326 196.7 138.212 196.872 137.984C197.045 137.753 197.131 137.427 197.131 137.007C197.131 136.604 197.032 136.294 196.833 136.08C196.634 135.865 196.353 135.757 195.988 135.757C195.653 135.757 195.381 135.845 195.173 136.021L195.036 136.148L193.913 135.87Z'],
        [6, 'M173.385 121.452V122.614H173.248C172.61 122.624 172.096 122.79 171.705 123.112C171.318 123.434 171.085 123.882 171.007 124.455C171.384 124.07 171.861 123.878 172.438 123.878C173.056 123.878 173.548 124.1 173.912 124.542C174.277 124.985 174.459 125.568 174.459 126.291C174.459 126.753 174.358 127.171 174.156 127.545C173.958 127.92 173.674 128.211 173.307 128.419C172.942 128.628 172.529 128.732 172.066 128.732C171.318 128.732 170.712 128.472 170.25 127.951C169.791 127.43 169.562 126.735 169.562 125.866V125.358C169.562 124.586 169.706 123.906 169.996 123.317C170.289 122.724 170.707 122.267 171.251 121.945C171.798 121.619 172.431 121.455 173.15 121.452H173.385ZM172.008 125.011C171.78 125.011 171.573 125.071 171.388 125.192C171.202 125.309 171.065 125.465 170.978 125.661V126.09C170.978 126.562 171.07 126.932 171.256 127.199C171.441 127.462 171.702 127.594 172.037 127.594C172.34 127.594 172.584 127.475 172.77 127.238C172.958 126.997 173.053 126.686 173.053 126.305C173.053 125.918 172.958 125.605 172.77 125.368C172.581 125.13 172.327 125.011 172.008 125.011Z'],
        [7, 'M143.537 106.218L140.788 112.537H139.299L142.053 106.57H138.518V105.427H143.537V106.218Z'],
        [8, 'M143.337 67.0728C143.337 67.4178 143.251 67.7238 143.078 67.9907C142.906 68.2576 142.668 68.4709 142.365 68.6304C142.71 68.7964 142.984 69.0259 143.186 69.3188C143.387 69.6086 143.488 69.9504 143.488 70.3442C143.488 70.9757 143.273 71.4754 142.844 71.8433C142.414 72.2078 141.83 72.3901 141.091 72.3901C140.352 72.3901 139.766 72.2062 139.333 71.8384C138.9 71.4705 138.684 70.9725 138.684 70.3442C138.684 69.9504 138.785 69.6069 138.986 69.314C139.188 69.021 139.46 68.7931 139.802 68.6304C139.499 68.4709 139.261 68.2576 139.089 67.9907C138.92 67.7238 138.835 67.4178 138.835 67.0728C138.835 66.4673 139.037 65.9855 139.44 65.6274C139.844 65.2661 140.393 65.0854 141.086 65.0854C141.776 65.0854 142.323 65.2645 142.727 65.6226C143.133 65.9774 143.337 66.4608 143.337 67.0728ZM142.072 70.2417C142.072 69.9325 141.983 69.6851 141.804 69.4995C141.625 69.314 141.384 69.2212 141.081 69.2212C140.782 69.2212 140.542 69.314 140.363 69.4995C140.184 69.6818 140.095 69.9292 140.095 70.2417C140.095 70.5444 140.183 70.7886 140.358 70.9741C140.534 71.1597 140.778 71.2524 141.091 71.2524C141.397 71.2524 141.636 71.1629 141.809 70.9839C141.984 70.8049 142.072 70.5575 142.072 70.2417ZM141.926 67.1411C141.926 66.8644 141.853 66.6431 141.706 66.4771C141.56 66.3078 141.353 66.2231 141.086 66.2231C140.822 66.2231 140.617 66.3045 140.471 66.4673C140.324 66.63 140.251 66.8547 140.251 67.1411C140.251 67.4243 140.324 67.6522 140.471 67.8247C140.617 67.9972 140.824 68.0835 141.091 68.0835C141.358 68.0835 141.563 67.9972 141.706 67.8247C141.853 67.6522 141.926 67.4243 141.926 67.1411Z'],
        [9, 'M180.906 60.0605C180.538 60.4219 180.109 60.6025 179.617 60.6025C178.989 60.6025 178.486 60.3877 178.108 59.958C177.731 59.5251 177.542 58.9424 177.542 58.21C177.542 57.7445 177.643 57.318 177.845 56.9307C178.05 56.54 178.335 56.2373 178.699 56.0225C179.064 55.8044 179.474 55.6953 179.93 55.6953C180.398 55.6953 180.815 55.8125 181.18 56.0469C181.544 56.2812 181.827 56.6182 182.029 57.0576C182.231 57.4971 182.334 58 182.337 58.5664V59.0889C182.337 60.2738 182.042 61.2048 181.453 61.8818C180.864 62.5589 180.029 62.9202 178.948 62.9658L178.602 62.9707V61.7939L178.914 61.7891C180.141 61.7337 180.805 61.1576 180.906 60.0605ZM179.964 59.5234C180.192 59.5234 180.387 59.4648 180.55 59.3477C180.716 59.2305 180.841 59.0889 180.926 58.9229V58.3418C180.926 57.8633 180.835 57.4922 180.652 57.2285C180.47 56.9648 180.226 56.833 179.92 56.833C179.637 56.833 179.404 56.9632 179.222 57.2236C179.039 57.4808 178.948 57.8047 178.948 58.1953C178.948 58.5827 179.036 58.9017 179.212 59.1523C179.391 59.3997 179.642 59.5234 179.964 59.5234Z'],
        [10, 'M214.569 62.9023H213.158V57.4629L211.474 57.9854V56.8379L214.418 55.7832H214.569V62.9023ZM221.669 59.9629C221.669 60.946 221.465 61.6979 221.059 62.2188C220.652 62.7396 220.056 63 219.271 63C218.497 63 217.904 62.7445 217.494 62.2334C217.084 61.7223 216.874 60.9899 216.864 60.0361V58.7275C216.864 57.7347 217.069 56.9811 217.479 56.4668C217.893 55.9525 218.487 55.6953 219.262 55.6953C220.036 55.6953 220.629 55.9508 221.039 56.4619C221.449 56.9697 221.659 57.7005 221.669 58.6543V59.9629ZM220.258 58.5273C220.258 57.9382 220.176 57.5101 220.014 57.2432C219.854 56.973 219.604 56.8379 219.262 56.8379C218.93 56.8379 218.684 56.9665 218.524 57.2236C218.368 57.4775 218.285 57.8763 218.275 58.4199V60.1484C218.275 60.7279 218.354 61.1592 218.51 61.4424C218.669 61.7223 218.923 61.8623 219.271 61.8623C219.617 61.8623 219.866 61.7272 220.019 61.457C220.172 61.1868 220.251 60.7734 220.258 60.2168V58.5273Z'],
        [11, 'M238.716 100.463H237.305V95.0239L235.62 95.5464V94.3989L238.564 93.3442H238.716V100.463ZM244.458 100.463H243.047V95.0239L241.362 95.5464V94.3989L244.307 93.3442H244.458V100.463Z'],
        [12, 'M265.545 151.439H264.134V146L262.449 146.522V145.375L265.394 144.32H265.545V151.439ZM272.732 151.439H267.859V150.472L270.159 148.021C270.475 147.676 270.708 147.375 270.857 147.118C271.01 146.861 271.087 146.616 271.087 146.385C271.087 146.069 271.007 145.822 270.848 145.643C270.688 145.461 270.46 145.37 270.164 145.37C269.845 145.37 269.593 145.48 269.407 145.702C269.225 145.92 269.134 146.208 269.134 146.566H267.718C267.718 146.133 267.82 145.737 268.025 145.379C268.234 145.021 268.527 144.741 268.904 144.54C269.282 144.334 269.71 144.232 270.188 144.232C270.921 144.232 271.489 144.408 271.893 144.759C272.299 145.111 272.503 145.607 272.503 146.249C272.503 146.6 272.412 146.958 272.229 147.323C272.047 147.687 271.735 148.112 271.292 148.597L269.676 150.301H272.732V151.439Z'],
        [13, 'M215.911 175.585H214.5V170.146L212.815 170.668V169.521L215.76 168.466H215.911V175.585ZM219.661 171.406H220.413C220.771 171.406 221.036 171.316 221.209 171.137C221.382 170.958 221.468 170.721 221.468 170.424C221.468 170.138 221.382 169.915 221.209 169.755C221.04 169.596 220.805 169.516 220.506 169.516C220.236 169.516 220.009 169.591 219.827 169.741C219.645 169.887 219.554 170.079 219.554 170.317H218.143C218.143 169.946 218.242 169.614 218.44 169.321C218.642 169.025 218.922 168.793 219.28 168.627C219.642 168.461 220.039 168.378 220.472 168.378C221.224 168.378 221.813 168.559 222.239 168.92C222.666 169.278 222.879 169.773 222.879 170.405C222.879 170.73 222.78 171.03 222.581 171.303C222.382 171.577 222.122 171.787 221.8 171.933C222.2 172.076 222.498 172.291 222.693 172.578C222.892 172.864 222.991 173.203 222.991 173.593C222.991 174.225 222.76 174.731 222.298 175.112C221.839 175.493 221.23 175.683 220.472 175.683C219.762 175.683 219.181 175.496 218.729 175.122C218.279 174.747 218.055 174.252 218.055 173.637H219.466C219.466 173.904 219.565 174.122 219.764 174.292C219.965 174.461 220.213 174.545 220.506 174.545C220.841 174.545 221.103 174.458 221.292 174.282C221.484 174.103 221.58 173.867 221.58 173.574C221.58 172.864 221.189 172.509 220.408 172.509H219.661V171.406Z'],
        [14, 'M160.911 175.585H159.5V170.146L157.815 170.668V169.521L160.76 168.466H160.911V175.585ZM167.4 172.91H168.206V174.047H167.4V175.585H165.989V174.047H163.074L163.011 173.159L165.975 168.476H167.4V172.91ZM164.417 172.91H165.989V170.4L165.896 170.561L164.417 172.91Z'],
        [15, 'M109.547 150.282H107.571V142.667L105.213 143.398V141.792L109.335 140.315H109.547V150.282ZM113.081 145.388L113.655 140.329H119.233V141.977H115.275L115.029 144.116C115.499 143.866 115.998 143.74 116.526 143.74C117.474 143.74 118.217 144.034 118.755 144.622C119.293 145.21 119.562 146.033 119.562 147.09C119.562 147.732 119.425 148.309 119.151 148.819C118.882 149.325 118.495 149.719 117.989 150.002C117.483 150.28 116.886 150.419 116.198 150.419C115.597 150.419 115.038 150.298 114.523 150.057C114.008 149.811 113.601 149.466 113.3 149.024C113.004 148.582 112.846 148.079 112.828 147.514H114.783C114.824 147.928 114.968 148.252 115.214 148.484C115.465 148.712 115.79 148.826 116.191 148.826C116.638 148.826 116.982 148.667 117.224 148.348C117.465 148.024 117.586 147.568 117.586 146.98C117.586 146.415 117.447 145.982 117.169 145.682C116.891 145.381 116.497 145.23 115.986 145.23C115.517 145.23 115.136 145.354 114.845 145.6L114.653 145.777L113.081 145.388Z'],
        [16, 'M50.9111 100.463H49.5V95.0239L47.8154 95.5464V94.3989L50.7598 93.3442H50.9111V100.463ZM57.0537 93.2808V94.4429H56.917C56.279 94.4526 55.7646 94.6187 55.374 94.9409C54.9867 95.2632 54.7539 95.7108 54.6758 96.2837C55.0534 95.8996 55.5303 95.7075 56.1064 95.7075C56.7249 95.7075 57.2165 95.9289 57.5811 96.3716C57.9456 96.8143 58.1279 97.397 58.1279 98.1196C58.1279 98.5819 58.027 99.0002 57.8252 99.3745C57.6266 99.7489 57.3434 100.04 56.9756 100.249C56.611 100.457 56.1976 100.561 55.7354 100.561C54.9867 100.561 54.3812 100.301 53.9189 99.7798C53.46 99.259 53.2305 98.564 53.2305 97.6948V97.187C53.2305 96.4155 53.3753 95.7352 53.665 95.146C53.958 94.5535 54.3763 94.0962 54.9199 93.7739C55.4668 93.4484 56.0999 93.284 56.8193 93.2808H57.0537ZM55.6768 96.8403C55.4489 96.8403 55.2422 96.9006 55.0566 97.021C54.8711 97.1382 54.7344 97.2944 54.6465 97.4897V97.9194C54.6465 98.3914 54.7393 98.7609 54.9248 99.0278C55.1104 99.2915 55.3708 99.4233 55.7061 99.4233C56.0088 99.4233 56.2529 99.3045 56.4385 99.0669C56.6273 98.826 56.7217 98.5151 56.7217 98.1343C56.7217 97.7469 56.6273 97.4344 56.4385 97.1968C56.2497 96.9591 55.9958 96.8403 55.6768 96.8403Z'],
        [17, 'M126.033 40.0977H124.622V34.6582L122.938 35.1807V34.0332L125.882 32.9785H126.033V40.0977ZM133.182 33.7793L130.433 40.0977H128.943L131.697 34.1309H128.162V32.9883H133.182V33.7793Z'],
        [18, 'M193.106 24H191.695V18.5605L190.011 19.083V17.9355L192.955 16.8809H193.106V24ZM200.055 18.7803C200.055 19.1253 199.968 19.4313 199.796 19.6982C199.623 19.9652 199.386 20.1784 199.083 20.3379C199.428 20.5039 199.701 20.7334 199.903 21.0264C200.105 21.3161 200.206 21.6579 200.206 22.0518C200.206 22.6833 199.991 23.1829 199.562 23.5508C199.132 23.9154 198.548 24.0977 197.809 24.0977C197.07 24.0977 196.484 23.9137 196.051 23.5459C195.618 23.1781 195.401 22.68 195.401 22.0518C195.401 21.6579 195.502 21.3145 195.704 21.0215C195.906 20.7285 196.178 20.5007 196.52 20.3379C196.217 20.1784 195.979 19.9652 195.807 19.6982C195.637 19.4313 195.553 19.1253 195.553 18.7803C195.553 18.1748 195.755 17.693 196.158 17.335C196.562 16.9736 197.11 16.793 197.804 16.793C198.494 16.793 199.041 16.972 199.444 17.3301C199.851 17.6849 200.055 18.1683 200.055 18.7803ZM198.79 21.9492C198.79 21.64 198.701 21.3926 198.521 21.207C198.342 21.0215 198.102 20.9287 197.799 20.9287C197.499 20.9287 197.26 21.0215 197.081 21.207C196.902 21.3893 196.812 21.6367 196.812 21.9492C196.812 22.252 196.9 22.4961 197.076 22.6816C197.252 22.8672 197.496 22.96 197.809 22.96C198.115 22.96 198.354 22.8704 198.526 22.6914C198.702 22.5124 198.79 22.265 198.79 21.9492ZM198.644 18.8486C198.644 18.5719 198.57 18.3506 198.424 18.1846C198.277 18.0153 198.071 17.9307 197.804 17.9307C197.54 17.9307 197.335 18.012 197.188 18.1748C197.042 18.3376 196.969 18.5622 196.969 18.8486C196.969 19.1318 197.042 19.3597 197.188 19.5322C197.335 19.7048 197.542 19.791 197.809 19.791C198.076 19.791 198.281 19.7048 198.424 19.5322C198.57 19.3597 198.644 19.1318 198.644 18.8486Z'],
        [19, 'M249.447 40.0977H248.036V34.6582L246.352 35.1807V34.0332L249.296 32.9785H249.447V40.0977ZM255.062 37.2559C254.695 37.6172 254.265 37.7979 253.773 37.7979C253.145 37.7979 252.642 37.583 252.265 37.1533C251.887 36.7204 251.698 36.1377 251.698 35.4053C251.698 34.9398 251.799 34.5133 252.001 34.126C252.206 33.7354 252.491 33.4326 252.855 33.2178C253.22 32.9997 253.63 32.8906 254.086 32.8906C254.555 32.8906 254.971 33.0078 255.336 33.2422C255.701 33.4766 255.984 33.8135 256.186 34.2529C256.387 34.6924 256.49 35.1953 256.493 35.7617V36.2842C256.493 37.4691 256.199 38.4001 255.609 39.0771C255.02 39.7542 254.185 40.1156 253.104 40.1611L252.758 40.166V38.9893L253.07 38.9844C254.298 38.929 254.962 38.3529 255.062 37.2559ZM254.12 36.7188C254.348 36.7188 254.543 36.6602 254.706 36.543C254.872 36.4258 254.997 36.2842 255.082 36.1182V35.5371C255.082 35.0586 254.991 34.6875 254.809 34.4238C254.626 34.1602 254.382 34.0283 254.076 34.0283C253.793 34.0283 253.56 34.1585 253.378 34.4189C253.196 34.6761 253.104 35 253.104 35.3906C253.104 35.778 253.192 36.097 253.368 36.3477C253.547 36.5951 253.798 36.7188 254.12 36.7188Z'],
        [20, 'M280.405 97.7803H275.532V96.8135L277.832 94.3623C278.148 94.0173 278.381 93.7161 278.53 93.459C278.683 93.2018 278.76 92.9577 278.76 92.7266C278.76 92.4108 278.68 92.1634 278.521 91.9844C278.361 91.8021 278.133 91.7109 277.837 91.7109C277.518 91.7109 277.266 91.8216 277.08 92.043C276.898 92.2611 276.807 92.5492 276.807 92.9072H275.391C275.391 92.4743 275.493 92.0788 275.698 91.7207C275.907 91.3626 276.2 91.0827 276.577 90.8809C276.955 90.6758 277.383 90.5732 277.861 90.5732C278.594 90.5732 279.162 90.749 279.565 91.1006C279.972 91.4521 280.176 91.9486 280.176 92.5898C280.176 92.9414 280.085 93.2995 279.902 93.6641C279.72 94.0286 279.408 94.4535 278.965 94.9385L277.349 96.6426H280.405V97.7803ZM286.06 94.8408C286.06 95.8239 285.856 96.5758 285.449 97.0967C285.042 97.6175 284.447 97.8779 283.662 97.8779C282.887 97.8779 282.295 97.6224 281.885 97.1113C281.475 96.6003 281.265 95.8678 281.255 94.9141V93.6055C281.255 92.6126 281.46 91.859 281.87 91.3447C282.284 90.8304 282.878 90.5732 283.652 90.5732C284.427 90.5732 285.02 90.8288 285.43 91.3398C285.84 91.8477 286.05 92.5785 286.06 93.5322V94.8408ZM284.648 93.4053C284.648 92.8161 284.567 92.388 284.404 92.1211C284.245 91.8509 283.994 91.7158 283.652 91.7158C283.32 91.7158 283.075 91.8444 282.915 92.1016C282.759 92.3555 282.676 92.7542 282.666 93.2979V95.0264C282.666 95.6058 282.744 96.0371 282.9 96.3203C283.06 96.6003 283.314 96.7402 283.662 96.7402C284.007 96.7402 284.256 96.6051 284.409 96.335C284.562 96.0648 284.642 95.6514 284.648 95.0947V93.4053Z'],
      ]
    }
  }

  arrondissementClicked(e){
    let arrondissement = e.target.getAttribute("data-value");
    this.props.arrondissementClicked({
      nbArrondissement: arrondissement
    })
  }

  render(){
    return (
      <div className="map__wrapper">
        {/* <div className="map__content">
          <h2>Séléctionnez un arrondissement</h2> */}
          <svg id="map" className="map__svg" viewBox="0 0 385 204" fill="none" xmlns="http://www.w3.org/2000/svg">
            {this.state.arrondissementShapes.map(arrondissement => {
              return (
                <g className="arrondissement" id={arrondissement[0]} onClick={this.arrondissementClicked.bind(this)}>
                  <path d={arrondissement[1]} data-value={arrondissement[0]} fill="#0C1971" stroke="#FFF"/>
                  <path className="number" data-value={arrondissement[0]} d={this.state.arrondissementNumbers[arrondissement[0] - 1][1]} fill="white"/>
                </g>
              )
            })}
          </svg>
          {/* <div className="map__caption">
            
          </div>
        </div> */}
      </div>
    )
  }
}

export default ParisMap