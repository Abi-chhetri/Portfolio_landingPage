import whatsapp from '../assets/whatsapp.png'

export const WorkArea = () =>{


    return (
        <section className="mt-[20%]">
            <header className="text-3xl ml-[10%]">
                <h1>Area Of</h1>
                <h1>Expertise</h1>
            </header>

            <div className="w-full flex justify-center items-center mt-[10%] pr-[15%]">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 600 500"
                    preserveAspectRatio="xMidYMid meet"
                >
 
                    <path
                    d="
                        M330 60
                        H450
                        L480 120
                        H300
                        Z
                    "
                    fill="#dedede"
                    />

                  
                    <text
                    x="390"
                    y="95"
                    textAnchor="middle"
                    fontSize="22"
                    font-weight="bold"
                    fill="#000"
                    >
                    Litigation
                    </text>

                    <path
                    d="
                    M130 70
                    H290
                    L400 150
                    H130
                    Z
                    "
                    fill="#a5bdfc"
                    />

                    <text
                    x="220"
                    y="115"
                    textAnchor="middle"
                    fontSize="22"
                    font-weight="bold"
                    fill="#000"
                    >
                    Corporate Law
                    </text>

                    <path
                    d="
                    M470 150
                    H180
                    V120
                    H485
                    Z
                    "
                    fill="#a5bdfc"
                    /> 

                    <path 
                    d="
                    M590 190
                    H400
                    L465 90
                    H590
                    Z
                    "
                    fill="#FFEF5F"
                    stroke-linejoin="round"
                    stroke-width="5"
                    stroke="#FFEF5F"
                    />
                   
                    <path
                    d="
                    M590 190
                    H130
                    L130 140
                    H590
                    Z
                    "
                    fill="#FFEF5F"
                    stroke-linejoin="round"
                    stroke-width="5"
                    stroke="#FFEF5F"
                    />

                    <text
                    x="520"
                    y="150"
                    z="100"
                    textAnchor="middle"
                    fontSize="22"
                    font-weight="bold"
                    fill="#000"
                    >
                        Family Law
                    </text>

                    <path 
                    d="
                    M450 200
                    H135
                    L135 155
                    H390
                    Z
                    "
                    fill="#B87C4C"
                    stroke-linejoin="round"
                    stroke-width="20"
                    stroke="#B87C4C"
                    />

                    <path 
                    d="
                    M590 195
                    H140
                    L140 400
                    H590
                    Z
                    "
                    fill="#B87C4C"
                    stroke-linejoin="round"
                    stroke-width="30"
                    stroke="#B87C4C"
                    />

                    <text
                    x="350"
                    y="320"
                    textAnchor="middle"
                    fontWeight="400"
                    font-size="60"
                    >
                        EXPERTISE
                    </text>

                </svg>
            </div>

            <div className="p-4 pr-4">
                <header 
                className="text-center text-4xl">
                    Work Experience
                </header>

                <hr className="mt-[8%]"/>

                <span className="flex justify-around mt-[2%]">
                    <div>
                        Dec 2024-Present
                    </div>
                    <aside>
                        <div>
                            XYZ Law Firm
                        </div>
                        <div className="text-xs font-thin opacity-80">
                            Managed complex <br /> corporate.
                        </div>
                    </aside>
                </span>

                <hr className="mt-[8%]"/>

                <span className="flex justify-around mt-[2%]">
                    <div>
                        Dec 2024-Present
                    </div>
                    <aside>
                        <div>
                            XYZ Law Firm
                        </div>
                        <div className="text-xs font-thin opacity-80">
                            Managed complex <br /> corporate.
                        </div>
                    </aside>
                </span>
            </div>
        </section>
    )
}