import { firestore } from '../firebase';
import { useFormInput } from './hooks';
import ctry from './country.json';
import * as Yup from 'yup';
import '../style/form.css';
console.log("this is the use form input log", useFormInput);
function Form() {
  // const sex_opt=["Male","Female","Transgender","Not Defined"];
 
const sex_opt=["Select Sex","Male","Female","Transgender","Not-Defined"];
const govid=["Select ID","Aadhar Card","VoterId Card","Govt.Issued Certificate"] ; 
const states= ["Select State","Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"];
const parentList = ["Select Parent","Father", "Mother","Grandfather","Grandmother", "Uncle","Others"];
const blood_list=["Select Blood","A+","A-","B+","B-","O+","O-","AB+","AB-"];
const religion_list=["Select Religion","Hindu","Muslim","Sikh","Jain","Others"];
const list_mar=["Please Select","Single","Married","Divorced","Others"];
  const name = useFormInput('');
  const dob = useFormInput('');
  const sex = useFormInput('');
  const mobile = useFormInput('');
  const gov_id_title=useFormInput('');
  const gov_id = useFormInput('');
  const guardian_title=useFormInput('');
  const guardian = useFormInput('');
  const email = useFormInput('');
  const emergency_contact = useFormInput('');
  const address = useFormInput('');
  const state = useFormInput('');
  const city = useFormInput('');
  const country = useFormInput('');
  const pincode = useFormInput('');
  const occupation = useFormInput('');
  const religion = useFormInput('');
  const maritial_status = useFormInput('');
  const blood=useFormInput('');  
  const national=useFormInput('');
  console.log(Yup);
  function handleSubmit(e) {
    e.preventDefault();
    console.log('title', name);
    console.log('subTitle', dob);
    console.log('content', sex);
    firestore.collection('student_reg').add({
      name: name.value,
      dob: dob.value,
      sex: sex.value,
      mobile: mobile.value,
      gov_id_title:gov_id_title.value,
      gov_id:gov_id.value,
      guardian_title:guardian_title.value,
      guardian:guardian.value,
      email:email.value,
      emergency_contact:emergency_contact.value,
      address:address.value,
      state:state.value,
      city:city.value,
      country:country.value,
      pincode:pincode.value,
      occupation:occupation.value,
      religion:religion.value,
      maritial_status:maritial_status.value,
      blood:blood.value,
      national:national.value,
      createdAt: new Date(),
    });
  }
  console.log();
  return (
    <div className="formInput"> 

      <form onSubmit={handleSubmit}>
        <div className='info'>
          <h6>Personal Details.</h6>
        </div> 
        <div className='personal'>
          <div className="name"><label>Name<span>*</span></label><input {...name} /></div>
          <div className="dob"><label>Date of Birth or Year<span>*</span></label><input type='date'{...dob} /></div>
          <div className="sex"> <label>Sex<span>*</span></label> <select placeholder='Please Select'{...sex}>
          {
            
              sex_opt.map((sex)=>{
                return(
                  <option>{sex}</option>
                )
              })
            }
          </select> </div>
          <div className="mobile"> <label>Mobile</label> <input {...mobile} /> </div>
          <div className="gov-id"> <label>Govt Issued Id</label> <select {...gov_id_title}>
          {
              govid.map((id)=>{
                return(
                  <option>{id}</option>
                )
              })
            } 
            </select><input {...gov_id} minLength={10} required/> </div>
        </div>
        <div className='info'>
          <h6>Contact Details.</h6>
        </div>
        <div className='contact'>
          <div className="name"><label>Guardian Details<span>*</span></label><select {...guardian_title}> 
            {
              parentList.map((parent)=>{
                return(
                  <option>{parent}</option>
                )
              })
            }   
            </select><input {...guardian} /></div>
          <div className="dob"><label>Email<span>*</span></label><input {...email} /></div>
          <div className="sex"> <label>Emergency Contact No.<span>*</span></label> <input {...emergency_contact} /> </div> 
        </div>
        <div className='info'>
          <h6>Address Details.</h6>
        </div>
        <div className='address'>
          <div className="addres"><label>Address<span>*</span></label><input {...address} /></div>
          <div className="state"><label>State<span>*</span></label><select {...state}>
          {
               
              states.map((state)=>{
                return(
                  <option>{state}</option>
                )
              })
            }
            </select></div>
          <div className="city"> <label>City<span>*</span></label> <input {...city} /> </div>
          <div className="mobile"> <label>Country</label> 
          <select {...country}> 
            {
              ctry.map((country)=>{
                return(
                  <option>{country.name}</option>
                )
              })
            }  
            </select> </div>
          <div className="pincode"> <label>Pincode</label> <input {...pincode} /></div>
        </div>
        <div className='info'>
          <h6>Other Details.</h6>
        </div>
        <div className='others'> 
          <div className="occupation"><label>Occupation<span>*</span></label><input {...occupation} /></div>
          <div className="religion"><label>Religion<span>*</span></label>
          <select {...religion}> 
            {
              religion_list.map((rlg)=>{
                return(
                  <option>{rlg}</option>
                )
              })
            } 
          </select>
          </div>
          <div className="marital-status"> <label>Maritial Status<span>*</span></label>
          <select {...blood}> 
            {
              list_mar.map((sg)=>{
                return(
                  <option>{sg}</option>
                )
              })
            } 
          </select>
           </div>
          <div className="blood-grp"> <label>Bood Group</label> 
          <select {...blood}> 
            {
              blood_list.map((bld)=>{
                return(
                  <option>{bld}</option>
                )
              })
            } 
          </select>  </div>
          <div className="gov-id"> <label>Nationality</label>
          <select {...national}> 
            {
              ctry.map((country)=>{
                return(
                  <option>{country.name}</option>
                )
              })
            } 
          </select> 
            </div>
        </div>
        <div className='buttons'>
          <button className="btn-cancel">Cancel</button>
          <button className="btn">Submit</button>
        </div> 
      </form>
    </div>
  );
}

export default Form;
