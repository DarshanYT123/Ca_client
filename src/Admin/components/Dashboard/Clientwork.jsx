import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Clientwork = () => {
  const TableData = [
    {
      srno: "1.",
      service: "IT Return",
      dt: "February 24, 2023, 11:00 AM",
      db: "Anisha Mehta",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      srno: "1.",
      service: "TDS Return",
      dt: "February 24, 2023, 11:00 AM",
      db: "Anisha Mehta",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <>
      <div className="pt-2 px-2 bg-[#F0F0F0]">
        <div className="pt-2 flex flex-row px-5  py-5">
          <h2 className="text-black text-[16px] font-inter not-italic font-medium leading-[normal]">
            Client
          </h2>
          <div className="flex justify-center items-center px-1">
            <BsArrowRight className="text-black" />
          </div>
          <h2 className="text-black text-[16px] font-inter not-italic font-medium leading-[normal]">
            ADD Work Done Info
          </h2>
          {/* <div className="flex justify-center items-center px-1">
          <BsArrowRight className="text-black" />
          </div> */}
        </div>

        {/* ==================================== */}

        <div className="flex justify-between bg-white items-center h-12 ">
          <div className="flex flex-row justify-center items-center px-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z"
                fill="#0D0D0D"
              />
            </svg>
            <h2 className="text-[color:var(--01,var(--01,#211F3B))] text-[14px] font-Montserrat not-italic font-bold leading-[normal]">
              Back
            </h2>
          </div>
          <div className="px-5">
            <h2 className="text-[color:var(--01,var(--01,#211F3B))] text-[16px] font-Montserrat not-italic font-medium leading-[normal]">
              Name Of Client with Serial No/CRM no
            </h2>
          </div>
          <div className="px-1">
            <button className="text-white text-[14px] font-inter px-8 py-3 bg-[#12B28C] not-italic font-bold leading-[normal]">
              Give Access to
            </button>
          </div>
        </div>

        {/* ==================================== */}

        {/* ===========================client work==================== */}
          <div className=" w-full overflow-y-scroll h-[30rem]">
        <form className="bg-[#F9F7F7] ">
          <div className="flex space-x-20 gap-[38rem] py-4 px-2 ">
            <div>
              <h5 className="text-[#000] text-[18px] not-italic leading-normal font-semibold">
                Sr No: 
                <span className="text-[18px] text-[#12B28C] px-2 font-inter not-italic font-semibold leading-normal" >1</span>
              </h5>
            </div>
           
            <div>
              <h5 className="text-[#000] text-[18px] not-italic leading-normal font-semibold">
                CRM No:
                <span className="text-[18px] text-[#12B28C] px-2 font-inter not-italic font-semibold leading-normal" >9019</span>
              </h5>
              <h5 className="text-[#000] text-[18px] not-italic leading-normal font-semibold">
                Inquiry No.
                <span className="text-[18px] text-[#12B28C] px-2 font-inter not-italic font-semibold leading-normal" >21082023/20:30PM</span>
              </h5>
            </div>
          </div>

          {/* ============================= */}

          <div className="px-2 py-4">
            <div className=" ">
           
              <label
                for="fullname"
                className="  block font-inter mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
              >
                Name Of Service{" "}
              </label>
              <div className=" p-0.5 w-[383px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  // value={fullname}
                  // onChange={handleChange}
                  // onBlur={validateOne}
                  //value={fullname}
                  //onChange={(e) => setFullname(e.target.value)}
                  tabIndex={1}
                  className=" w-[380px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                  required
                />
              </div>
              <div className="relative"> 
              <div className="absolute  left-[500px] bottom-[-5px]">
              <button
                  type="submit"
                  class=" w-full h-[35px] font-inter text-[#fff] text-[14px] not-italic font-bold leading-normal bg-[#211F3B]  px-8 p-2  py-1.5 mr-2 mb-2"
                >
                  Edit Basic Details
                </button>
                </div>
              </div>
           
            </div>

            <div className="py-4">
              <label
                for="fullname"
                className="  block font-inter mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
              >
                Work Description{" "}
              </label>
              <div className=" p-0.5 w-[1083px] h-[216px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                <textarea
                  type="text"
                  id="fullname"
                  name="fullname"
                  // value={fullname}
                  // onChange={handleChange}
                  // onBlur={validateOne}
                  //value={fullname}
                  //onChange={(e) => setFullname(e.target.value)}
                  tabIndex={1}
                  className="resize-none w-[1080px] h-[213px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* =============================*/}

          {/* ======================Add and cancel button=========== */}

          <div className="px-2">
            <div className="flex space-x-20 gap-[14.5rem] items-center px-2  pt-1 py-2">
              <div className="flex">
                <button
                  type="submit"
                  class="cursor-pointer  w-full h-[40px] font-Montserrat text-[#fff] text-[16px] not-italic font-semibold leading-normal bg-[#12B28C]  px-6 p-2.5  py-2.5 mr-2 mb-2"
                >
                  Save
                </button>
                <div className="cursor-pointer  bg-[#FF0000] px-2 p-2.5  py-2 mr-2 mb-2 w-full h-[40px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="27"
                  viewBox="0 0 25 27"
                  fill="none"
                  className="bg-[#00FFF]"
                >
                  <path
                    d="M7.38455 4.8919C7.38455 3.69777 8.30294 2.72974 9.43583 2.72974H15.5897C16.7226 2.72974 17.641 3.69777 17.641 4.8919V7.05406H19.6817C19.688 7.054 19.6943 7.054 19.7007 7.05406H21.7435C22.31 7.05406 22.7692 7.53808 22.7692 8.13514C22.7692 8.73221 22.31 9.21622 21.7435 9.21622H20.6472L19.7577 22.3432C19.681 23.4747 18.7878 24.3514 17.7116 24.3514H7.31391C6.23772 24.3514 5.34451 23.4747 5.26784 22.3432L4.37828 9.21622H3.28199C2.71554 9.21622 2.25635 8.73221 2.25635 8.13514C2.25635 7.53808 2.71554 7.05406 3.28199 7.05406H5.3248C5.33117 7.054 5.33752 7.054 5.34386 7.05406H7.38455V4.8919ZM9.43583 7.05406H15.5897V4.8919H9.43583V7.05406ZM6.43478 9.21622L7.31391 22.1892H17.7116L18.5907 9.21622H6.43478ZM10.4615 11.3784C11.0279 11.3784 11.4871 11.8624 11.4871 12.4595V18.946C11.4871 19.543 11.0279 20.027 10.4615 20.027C9.89503 20.027 9.43583 19.543 9.43583 18.946V12.4595C9.43583 11.8624 9.89503 11.3784 10.4615 11.3784ZM14.564 11.3784C15.1305 11.3784 15.5897 11.8624 15.5897 12.4595V18.946C15.5897 19.543 15.1305 20.027 14.564 20.027C13.9976 20.027 13.5384 19.543 13.5384 18.946V12.4595C13.5384 11.8624 13.9976 11.3784 14.564 11.3784Z"
                    fill="white"
                  />
          
                </svg>
                </div>
              </div>

              <div></div>
              <div className="flex flex-row px-10 py-4 ">
                <div className="px-1 flex justify-center items-center  flex-row ">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search"
                    className="text-[14px] outline-none h-10 w-[12rem] shadow-[0px_0px_7px_0px_#D9D9D9] border  p-3   text-[#AEAEB2]  not-italic font-medium leading-[normal]"
                  />
                  <div className="relative -left-10 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.53994 0.729858C13.0134 0.729858 16.6399 4.35635 16.6399 8.82986C16.6399 10.7422 15.9773 12.4997 14.869 13.8853L18.1763 17.1935C18.5278 17.5449 18.5278 18.1148 18.1763 18.4663C17.8519 18.7907 17.3414 18.8156 16.9883 18.5411L16.9035 18.4663L13.5954 15.1589C12.2098 16.2672 10.4522 16.9299 8.53994 16.9299C4.06643 16.9299 0.439941 13.3034 0.439941 8.82986C0.439941 4.35635 4.06643 0.729858 8.53994 0.729858ZM8.53975 2.52979C5.06035 2.52979 2.23975 5.3504 2.23975 8.82979C2.23975 12.3092 5.06035 15.1298 8.53975 15.1298C12.0191 15.1298 14.8397 12.3092 14.8397 8.82979C14.8397 5.3504 12.0191 2.52979 8.53975 2.52979Z"
                        fill="#211F3B"
                      />
                    </svg>
                  </div>
                </div>
                <div className="px-2 py-2 bg-white shadow-[0px_0px_7px_0px_#D9D9D9] cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                  >
                    <path
                      d="M5.03564 8.13516C5.03564 7.53809 5.49484 7.05408 6.06129 7.05408H20.4203C20.9867 7.05408 21.4459 7.53809 21.4459 8.13516C21.4459 8.73222 20.9867 9.21624 20.4203 9.21624H6.06129C5.49484 9.21624 5.03564 8.73222 5.03564 8.13516ZM7.08693 13.5406C7.08693 12.9435 7.54612 12.4595 8.11257 12.4595H18.369C18.9354 12.4595 19.3946 12.9435 19.3946 13.5406C19.3946 14.1376 18.9354 14.6216 18.369 14.6216H8.11257C7.54612 14.6216 7.08693 14.1376 7.08693 13.5406ZM9.13821 18.946C9.13821 18.3489 9.5974 17.8649 10.1639 17.8649H16.3177C16.8841 17.8649 17.3433 18.3489 17.3433 18.946C17.3433 19.543 16.8841 20.027 16.3177 20.027H10.1639C9.5974 20.027 9.13821 19.543 9.13821 18.946Z"
                      fill="#211F3B"
                    />
                  </svg>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* ======================end Add and ancel button======== */}
        </form>
        {/* ===========================client work end=============== */}
        <div className="py-2">
          <div className=" flex flex-col md:flex-row  ">
            <div className=" w-full max-h-[650px] h-fit ">
              <table className="table-auto1 border-spacing-0 border-collapse w-full border-0">
                <thead id="table_fixed">
                  <tr className="text-[18px] font-bold font-inter  border  bg-[#12B28C] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">
                    <th className="px-[1.9rem] py-4 whitespace-nowrap">
                      <p className="font-semibold text-left text-[#fff]">
                        Sr No.
                      </p>
                    </th>
                    <th className="px-[1.1rem] py-4 whitespace-nowrap">
                      <p className="font-semibold text-left text-[#fff]">
                        Service
                      </p>
                    </th>
                    <th className="px-[0.6rem] py-4 whitespace-nowrap">
                      <p className="font-semibold text-left text-[#fff]">
                        Date & Time
                      </p>
                    </th>
                    <th className="px-[1.9rem] py-4 whitespace-nowrap">
                      <p className="font-semibold text-left text-[#fff]">
                        Done by
                      </p>
                    </th>
                    <th className="px-[2rem] py-4 whitespace-nowrap flex flex-row gap-x-40 ">
                      <p className="font-semibold text-left text-[#fff]">
                        Details
                      </p>

                      <p className="font-semibold px-4 bg-[#fff] text-[#000]">
                        Shot By
                      </p>
                    </th>
                    {/* <th className="text-center  px-[1.1rem] py-4 whitespace-nowrap">
                  <p className="font-semibold bg-white  px-2  text-black">Shot By</p>
                </th> */}
                  </tr>
                </thead>
                <tbody id="contain">
                  {TableData.map((item, index) => (
                    <tr
                      id="table_scroll"
                      className="text-sm  h-[72px] rounded-lg py-3 px-3 transition-all duration-300"
                      key={index}
                    >
                      <td className="px-[1.9rem] whitespace-nowrap">
                        <div className="">
                          <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                            {item.srno}
                          </div>
                        </div>
                      </td>
                      <td className="px-[1.4rem] whitespace-nowrap">
                        <div className="">
                          <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                            {item.service}
                          </div>
                        </div>
                      </td>
                      <td className="px-[1.3rem] whitespace-nowrap">
                        <div className="">
                          <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                            {item.dt}
                          </div>
                        </div>
                      </td>
                      <td className="px-[1.4rem] whitespace-nowrap">
                        <div className="">
                          <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                            {item.db}
                          </div>
                        </div>
                      </td>
                      <td className=" ">
                        <div className="w-80">
                          <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                            {item.details}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Clientwork;
