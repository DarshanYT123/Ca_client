import React, { useState } from "react";
import SelectRemkdropdown from "../Inquiry/SelectRemkdropdown";
// import { useParams } from "react-router-dom"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom";
import fireDb from "../../../firebase"
// import fireDb from "firebase/app"

const initialState = {
  fullname:"",
  emailid:"",
  mobileno:""
}


const Inquiry = () => {
  
  const [selected, setSelected] = useState("Select Remarks");
  const [addFormData,setAddFormData]  = useState({})
  // const [fullname, setFullname] = useState()
  // const [emailid, setEmailid] = useState()
  // const [mobileno, setMobileno] = useState()
  const [address, setAddress]=useState()
  const [write, setWrite]= useState()
  const [services, setServices] = useState([])
  const navigate = useNavigate()
  const [state,setState] = useState(initialState);
  const [data,setData]= useState({})
  const history = useNavigate()
 //multi cheakbox
 const  getServices = (e) => {


 const { value, checked } = e.target;

//  console.log(`${value} is ${checked}`);
  
 if(checked){
  setServices([...services,value])

 }else{
  setServices(services.filter((e)=>e !==value))
 }
 }
 const {fullname,mobileno,emailid} = state;  
 

 const handleInputChange = (e) => {
  const {name,value} = e.target;
  setState({...state,[name]:value});
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!fullname || !emailid || !mobileno ){
      toast.error("Please provide value in each input field")
    }
    else{
      fireDb.child("contacts").push(state,(err) =>{
        if(err) {
          toast.error(err);
        }else {
          toast.success("Contact Added Successfully");
        }
      })
      setTimeout(() => history("/inquiryfrom"))
    }
    //     if(fullname === ""){
//   toast.error("Name Is Required")
// }    
// else if(mobileno === ""){
//   toast.error("mobile no Is Required")
// }    
// else if(emailid === ""){
//   toast.error("Email Is Required")
// }
// else if(address === ""){
//   toast.error("Address Is Required")
// }
// else if(write === ""){
//   toast.error("Write Is Required")
// }else if(services === ""){
//   toast.error("Services Is Required")
// }else{
//   localStorage.setItem('name',fullname)
//   localStorage.setItem('mobile no',mobileno)
//   localStorage.setItem('email id',emailid)
//   localStorage.setItem('address',address)
//   localStorage.setItem('write',write)
//   localStorage.setItem('services',services)
//   toast.success("User Saved!");
// }    navigate('/inquiryfrom')

    // const data = new FormData()
    // data.append('fullname', fullname)
    // data.append('mobileno', mobileno)
    // data.append('emailid', emailid)
    // data.append('address', address)
    // data.append('write', write)
    // data.append('services',services)
    
    //   console.log(data.get('fullname'))
    //   console.log(data.get('mobileno'))
    //   console.log(data.get('emailid'))
    //   console.log(data.get('address'))
    //   console.log(data.get('write'))
    //   console.log(data.get('services'))
  };

  
  return (
    <>
      {/*=======================desktopview=========================== */}
      <div className="hidden md:hidden lg:block">
        <div className=" lg:px-14 pt-10  flex items-center  justify-center" >
          <form onSubmit={handleSubmit}>
            {/* first form section */}
            <div className="flex space-x-10 ">
              <div className="">
                <label
                  for="fullname"
                  className="  block font-inter mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                >
                  Full Name{" "}
                </label>
                <div className=" p-0.5 w-[383px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={fullname}
                    onChange={handleInputChange}
                    tabIndex={1}
                    className="w-[380px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
               
              </div>
              <div>

                <label
                  for="mobileno"
                  className="block font-inter mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                >
                  Mobile No.{" "}
                </label>
                <div className=" p-0.5 w-[383px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="number"
                    id="mobileno"
                    name="mobileno"
                    value={mobileno}
                    onChange={handleInputChange}
                    
                    tabIndex={2}
                    className="w-[380px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3 focus:outline-none  "
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  for="emailid"
                  className="block font-inter mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                >
                  Email Id{" "}
                </label>
                <div className=" p-0.5 w-[383px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="emailid"
                    name="emailid"
                    value={emailid}
                    onChange={handleInputChange}
                   // value={data.emailid}
                   // onChange={handleChange}
                    tabIndex={3}
                    className="w-[380px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>
            {/* first form section end */}

            {/* first form section2 */}

            <div className="flex space-x-10 items-center py-10 ">
              <div>
                <SelectRemkdropdown
                  selected={selected}
                  setSelected={setSelected}
                />
              </div>
              <div>
                <label
                  for="address"
                  className="block mb-2 font-inter text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                >
                  Address{" "}
                </label>
                <div className=" p-0.5 w-[383px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={(e) => setAddress(e.target.value)}
                   value={address}
                    className="w-[380px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>

            {/* first form section2 end */}

            {/*  cheakbox */}

            <div>
              <label
                for="select"
                className="block font-inter mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
              >
                Select Services You want{" "}
              </label>
            </div>

            <div className="flex flex-row gap-[6.5rem]">
              <div className="flex flex-col gap-2">
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" Accounting"
                    //value={data.services}
                    
                    className="accent-[#12B28C] w-4 h-4 "
                  />

                  <label
                    for="default-checkbox"
                    className=" font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    Accounting{" "}
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" IT Return"
                   
                    chea
                    className="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 font-Montserrat text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    IT Return{" "}
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" TDS Return"
                    className="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 font-Montserrat text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                     TDS Return
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" GST Return"
                    className="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 font-Montserrat text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    GST Return{" "}
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" GST Registration"
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 font-Montserrat text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    GST Registration
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" ROC"
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 font-Montserrat text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    ROC
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" IT Litigations "
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 font-Montserrat text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    IT Litigations
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value="   GST Litigations "
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 font-Montserrat text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    GST Litigations
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value="   Management Consultancy Services "
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 font-Montserrat text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    Management Consultancy Services
                  </label>
                </div>
                <div className="block">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value="    Others : (write Services on below box) "
                    className="accent-[#12B28C] w-4 h-4"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 font-Montserrat text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    Others : (write Services on below box)
                  </label>
                </div>
                <div className="py-2">
                  <div className="ml-5 p-0.5 w-[314px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                    <input
                      id="write"
                      type="text"
                      name="write"
                      onChange={(e) => setWrite(e.target.value)}
                     value={write}
                      placeholder="Write Other Services You want"
                      className=" w-[310px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* end cheakbox */}

            {/* Button  */}

            <div className="flex space-x-5 py-5">
              <button
                type="submit"
                class=" font-Montserrat text-white text-[16px] not-italic font-semibold leading-normal bg-[#211F3B] px-5 py-2.5 mr-2 mb-2"
                onClick={handleSubmit}
              >
                Send
              </button>
              <button
                type="button"
                class="font-inter text-[#211F3B] text-[16px] not-italic font-semibold leading-normal border border-[#211F3B] px-5 py-2.5 mr-2 mb-2"
              >
                Cancel
              </button>
            </div>

            {/* End button */}
          </form>
        </div>
      </div>
      {/*=======================desktopview End=========================== */}

      {/* ======================Small device=============================== */}
      {/* <div className="block md:block lg:hidden">
        <div className=" px-8 md:px-10 pt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-col items-center ">
              <div className="py-3">
                <label
                  for="fullname"
                  className="block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                >
                  Full Name{" "}
                </label>
                <div className=" p-0.5 w-[253px] md:w-[403px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    onChange={(e) => setFullname(e.target.value)}
                    className="w-[250px] md:w-[400px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="py-3">
                <label
                  for="mobileno"
                  className="block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                >
                  Mobile No.{" "}
                </label>
                <div className=" p-0.5 w-[253px] md:w-[403px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="number"
                    id="mobileno"
                    name="mobileno"
                    onChange={(e) => setMobileno(e.target.value)}
                    className="w-[250px] md:w-[400px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3 focus:outline-none  "
                    required
                  />
                </div>
              </div>
              <div className="py-3">
                <label
                  for="emailid"
                  className="block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                >
                  Email Id{" "}
                </label>
                <div className=" p-0.5 w-[253px] md:w-[403px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="emailid"
                    name="emailid"
                    onChange={(e) => setEmailid(e.target.value)}
                    className="w-[250px] md:w-[400px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-col items-center py-10 ">
              <div>
                <SelectRemkdropdown
                  selected={selected}
                  setSelected={setSelected}
                />
              </div>
              <div className="py-3">
                <label
                  for="address"
                  className="block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                >
                  Address{" "}
                </label>
                <div className=" p-0.5 w-[253px] md:w-[403px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={(e) => setAddress(e.target.value)}
                   
                    className="w-[250px] md:w-[400px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>


            <div className="flex  items-center justify-center py-5">
              <label
                for="address"
                className="block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
              >
                Select Services You want{" "}
              </label>
            </div>

            <div className="flex flex-col md:flex-col items-center gap-[2rem]">
              <div className="flex flex-col md:flex-col gap-2">
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" Accounting"
                    className=" accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    Accounting{" "}
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" IT Return"
                    className=" accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    IT Return{" "}
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value="TDS Return"
                    className="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                   TDS Return
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value="GST Return"
                    className="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    GST Return{" "}
                  </label>
                </div>
              </div>
              <div className="flex flex-col md:flex-col gap-2 md:pl-8">
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value="GST Registration"
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    GST Registration
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value="ROC"
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    ROC
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value="IT Litigations"
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    IT Litigations
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value="GST Litigations"
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    GST Litigations
                  </label>
                </div>
              </div>

              <div className="flex flex-col md:flex-col gap-2">
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value="Management Consultancy Services"
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    Management Consultancy Services
                  </label>
                </div>
                <div className="block">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value="Others : (write Services on below box)"
                    className="accent-[#12B28C] w-4 h-4"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    Others : (write Services on below box)
                  </label>
                </div>
                <div className="py-2">
                  <div className="ml-5 p-0.5 w-[253px] md:w-[403px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                    <input
                      id="write"
                      type="text"
                      name="write"
                      onChange={(e) => setWrite(e.target.value)}
                      placeholder="Write Other Services You want"
                      className=" w-[250px] md:w-[400px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none  "
                    />
                  </div>
                </div>
              </div>
            </div>


            <div className="flex space-x-5 items-center justify-center py-5">
              <button
                type="submit"
                class="text-white text-[16px] not-italic font-semibold leading-normal bg-[#211F3B] px-5 py-2.5 mr-2 mb-2"
              >
                Send
              </button>
              <button
                type="button"
                class="text-[#211F3B] text-[16px] not-italic font-semibold leading-normal border border-[#211F3B] px-5 py-2.5 mr-2 mb-2"
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </div> */}
      {/* ======================Small device end=========================== */}
    </>
  );
};

export default Inquiry;
// import React, { useState,useEffect } from "react";
// import SelectRemkdropdown from "../Inquiry/SelectRemkdropdown";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom";
// // import "../../index.css";



// const Inquiry = () => {
  
//   const [selected, setSelected] = useState("Select Remarks");
//   const [addFormData,setAddFormData]  = useState({})
//   const [fullname, setFullname] = useState()
//   const [emailid, setEmailid] = useState()
//   const [mobileno, setMobileno] = useState()
//   const [address, setAddress]=useState()
//   const [write, setWrite]= useState()
//   const [services, setServices] = useState([])
//   const navigate = useNavigate()
//   const [formData,setFormData]  = useState({fullname:'',mobileno:'',emailid:''})
  
//   const handleChange =(event) =>{
//     setFormData({...formData,[event.target.name]:event.target.value})
//   }
 

//  //multi cheakbox
//  const  getServices = (e) => {


//  const { value, checked } = e.target;

// //  console.log(`${value} is ${checked}`);
  
//  if(checked){
//   setServices([...services,value])

//  }else{
//   setServices(services.filter((e)=>e !==value))
//  }
//  }


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(fullname === ""){
//   toast.error("Name Is Required")
// }    
// else if(mobileno === ""){
//   toast.error("mobile no Is Required")
// }    
// else if(emailid === ""){
//   toast.error("Email Is Required")
// }
// else if(address === ""){
//   toast.error("Address Is Required")
// }
// else if(write === ""){
//   toast.error("Write Is Required")
// }else if(services === ""){
//   toast.error("Services Is Required")
// }else{
//   localStorage.setItem('name',fullname)
//   localStorage.setItem('mobile no',mobileno)
//   localStorage.setItem('email id',emailid)
//   localStorage.setItem('address',address)
//   localStorage.setItem('write',write)
//   localStorage.setItem('services',services)
//   toast.success("User Saved!");
// }    navigate('/inquiryfrom')

//     // const data = new FormData()
//     // data.append('fullname', fullname)
//     // data.append('mobileno', mobileno)
//     // data.append('emailid', emailid)
//     // data.append('address', address)
//     // data.append('write', write)
//     // data.append('services',services)
    
//     //   console.log(data.get('fullname'))
//     //   console.log(data.get('mobileno'))
//     //   console.log(data.get('emailid'))
//     //   console.log(data.get('address'))
//     //   console.log(data.get('write'))
//     //   console.log(data.get('services'))
//   };

  
//   return (
//     <>
//       {/*=======================desktopview=========================== */}
//       <div className="hidden md:hidden lg:block">
//         <div className=" lg:px-10 pt-10">
//           <form onSubmit={handleSubmit}>
//             {/* first form section */}
//             <div className="flex space-x-10 items-center ">
//               <div className="">
//                 <label
//                   for="fullname"
//                   className="  block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
//                 >
//                   Full Name{" "}
//                 </label>
//                 <div className=" p-0.5 w-[403px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
//                   <input
//                     type="text"
//                     id="fullname"
//                     name="fullname"
//                     value={fullname}
//                     onChange={(e) => setFullname(e.target.value)}
//                     tabIndex={1}
//                     className="w-[400px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
//                     required
//                   />
//                 </div>
               
//               </div>
//               <div>
//               {/* <p>{ formErrors.fullname}</p> */}

//                 <label
//                   for="mobileno"
//                   className="block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
//                 >
//                   Mobile No.{" "}
//                 </label>
//                 <div className=" p-0.5 w-[403px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
//                   <input
//                     type="number"
//                     id="mobileno"
//                     name="mobileno"
//                     value={mobileno}
//                     onChange={(e) => setMobileno(e.target.value)}
                    
//                     tabIndex={2}
//                     className="w-[400px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3 focus:outline-none  "
//                     required
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   for="emailid"
//                   className="block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
//                 >
//                   Email Id{" "}
//                 </label>
//                 <div className=" p-0.5 w-[403px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
//                   <input
//                     type="text"
//                     id="emailid"
//                     name="emailid"
//                     value={emailid}
//                     onChange={(e) => setEmailid(e.target.value)}
//                    // value={data.emailid}
//                    // onChange={handleChange}
//                     tabIndex={3}
//                     className="w-[400px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//             {/* first form section end */}

//             {/* first form section2 */}

//             <div className="flex space-x-10 items-center py-10 ">
//               <div>
//                 <SelectRemkdropdown
//                   selected={selected}
//                   setSelected={setSelected}
//                 />
//               </div>
//               <div>
//                 <label
//                   for="address"
//                   className="block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
//                 >
//                   Address{" "}
//                 </label>
//                 <div className=" p-0.5 w-[403px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
//                   <input
//                     type="text"
//                     id="address"
//                     name="address"
//                     onChange={(e) => setAddress(e.target.value)}
//                    value={address}
//                     className="w-[400px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* first form section2 end */}

//             {/*  cheakbox */}

//             <div>
//               <label
//                 for="select"
//                 className="block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
//               >
//                 Select Services You want{" "}
//               </label>
//             </div>

//             <div className="flex flex-row gap-[7.5rem]">
//               <div className="flex flex-col gap-2">
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value=" Accounting"
//                     //value={data.services}
                    
//                     className="accent-[#12B28C] w-4 h-4 "
//                   />

//                   <label
//                     for="default-checkbox"
//                     className="  ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     Accounting{" "}
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value=" IT Return"
                   
//                     chea
//                     className="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     IT Return{" "}
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value=" TDS Return"
//                     className="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                      TDS Return
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value=" GST Return"
//                     className="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     GST Return{" "}
//                   </label>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value=" GST Registration"
//                     class="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     GST Registration
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value=" ROC"
//                     class="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     ROC
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value=" IT Litigations "
//                     class="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     IT Litigations
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value="   GST Litigations "
//                     class="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     GST Litigations
//                   </label>
//                 </div>
//               </div>

//               <div className="flex flex-col gap-2">
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value="   Management Consultancy Services "
//                     class="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     Management Consultancy Services
//                   </label>
//                 </div>
//                 <div className="block">
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value="    Others : (write Services on below box) "
//                     className="accent-[#12B28C] w-4 h-4"
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     Others : (write Services on below box)
//                   </label>
//                 </div>
//                 <div className="py-2">
//                   <div className="ml-5 p-0.5 w-[314px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
//                     <input
//                       id="write"
//                       type="text"
//                       name="write"
//                       onChange={(e) => setWrite(e.target.value)}
//                      value={write}
//                       placeholder="Write Other Services You want"
//                       className=" w-[310px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none "
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* end cheakbox */}

//             {/* Button  */}

//             <div className="flex space-x-5 py-5">
//               <button
//                 type="submit"
//                 class="text-white text-[16px] not-italic font-semibold leading-normal bg-[#211F3B] px-5 py-2.5 mr-2 mb-2"
//                 onClick={handleSubmit}
//               >
//                 Send
//               </button>
//               <button
//                 type="button"
//                 class="text-[#211F3B] text-[16px] not-italic font-semibold leading-normal border border-[#211F3B] px-5 py-2.5 mr-2 mb-2"
//               >
//                 Cancel
//               </button>
//             </div>

//             {/* End button */}
//           </form>
//         </div>
//       </div>
//       {/*=======================desktopview End=========================== */}

//       {/* ======================Small device=============================== */}
//       {/* <div className="block md:block lg:hidden">
//         <div className=" px-8 md:px-10 pt-10">
//           <form onSubmit={handleSubmit}>
//             <div className="flex flex-col md:flex-col items-center ">
//               <div className="py-3">
//                 <label
//                   for="fullname"
//                   className="block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
//                 >
//                   Full Name{" "}
//                 </label>
//                 <div className=" p-0.5 w-[253px] md:w-[403px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
//                   <input
//                     type="text"
//                     id="fullname"
//                     name="fullname"
//                     onChange={(e) => setFullname(e.target.value)}
//                     className="w-[250px] md:w-[400px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="py-3">
//                 <label
//                   for="mobileno"
//                   className="block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
//                 >
//                   Mobile No.{" "}
//                 </label>
//                 <div className=" p-0.5 w-[253px] md:w-[403px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
//                   <input
//                     type="number"
//                     id="mobileno"
//                     name="mobileno"
//                     onChange={(e) => setMobileno(e.target.value)}
//                     className="w-[250px] md:w-[400px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3 focus:outline-none  "
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="py-3">
//                 <label
//                   for="emailid"
//                   className="block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
//                 >
//                   Email Id{" "}
//                 </label>
//                 <div className=" p-0.5 w-[253px] md:w-[403px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
//                   <input
//                     type="text"
//                     id="emailid"
//                     name="emailid"
//                     onChange={(e) => setEmailid(e.target.value)}
//                     className="w-[250px] md:w-[400px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col md:flex-col items-center py-10 ">
//               <div>
//                 <SelectRemkdropdown
//                   selected={selected}
//                   setSelected={setSelected}
//                 />
//               </div>
//               <div className="py-3">
//                 <label
//                   for="address"
//                   className="block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
//                 >
//                   Address{" "}
//                 </label>
//                 <div className=" p-0.5 w-[253px] md:w-[403px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
//                   <input
//                     type="text"
//                     id="address"
//                     name="address"
//                     onChange={(e) => setAddress(e.target.value)}
                   
//                     className="w-[250px] md:w-[400px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>


//             <div className="flex  items-center justify-center py-5">
//               <label
//                 for="address"
//                 className="block mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
//               >
//                 Select Services You want{" "}
//               </label>
//             </div>

//             <div className="flex flex-col md:flex-col items-center gap-[2rem]">
//               <div className="flex flex-col md:flex-col gap-2">
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value=" Accounting"
//                     className=" accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     Accounting{" "}
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value=" IT Return"
//                     className=" accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     IT Return{" "}
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value="TDS Return"
//                     className="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                    TDS Return
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value="GST Return"
//                     className="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     GST Return{" "}
//                   </label>
//                 </div>
//               </div>
//               <div className="flex flex-col md:flex-col gap-2 md:pl-8">
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value="GST Registration"
//                     class="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     GST Registration
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value="ROC"
//                     class="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     ROC
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value="IT Litigations"
//                     class="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     IT Litigations
//                   </label>
//                 </div>
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value="GST Litigations"
//                     class="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     GST Litigations
//                   </label>
//                 </div>
//               </div>

//               <div className="flex flex-col md:flex-col gap-2">
//                 <div>
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value="Management Consultancy Services"
//                     class="accent-[#12B28C] w-4 h-4 "
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     Management Consultancy Services
//                   </label>
//                 </div>
//                 <div className="block">
//                   <input
//                     id="default-checkbox"
//                     type="checkbox"
//                     name="services"
//                     onChange={(e) => getServices(e)}
//                     value="Others : (write Services on below box)"
//                     className="accent-[#12B28C] w-4 h-4"
//                   />
//                   <label
//                     for="default-checkbox"
//                     className="ml-1 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
//                   >
//                     Others : (write Services on below box)
//                   </label>
//                 </div>
//                 <div className="py-2">
//                   <div className="ml-5 p-0.5 w-[253px] md:w-[403px] h-[43px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
//                     <input
//                       id="write"
//                       type="text"
//                       name="write"
//                       onChange={(e) => setWrite(e.target.value)}
//                       placeholder="Write Other Services You want"
//                       className=" w-[250px] md:w-[400px] h-[40px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none  "
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>


//             <div className="flex space-x-5 items-center justify-center py-5">
//               <button
//                 type="submit"
//                 class="text-white text-[16px] not-italic font-semibold leading-normal bg-[#211F3B] px-5 py-2.5 mr-2 mb-2"
//               >
//                 Send
//               </button>
//               <button
//                 type="button"
//                 class="text-[#211F3B] text-[16px] not-italic font-semibold leading-normal border border-[#211F3B] px-5 py-2.5 mr-2 mb-2"
//               >
//                 Cancel
//               </button>
//             </div>

//           </form>
//         </div>
//       </div> */}
//       {/* ======================Small device end=========================== */}
//     </>
//   );
// };

// export default Inquiry;
