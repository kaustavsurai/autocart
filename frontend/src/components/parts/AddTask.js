import { useState } from 'react'
const packages = [
  {
    label: "Bike",
    setpackage: "bike",
    name:"bike",
  },
  {
    label: "Car",
    setpackage: "car",
    name:"car",
  },
  {
    label: "Truck",
    setpackage: "truck",
    name:"truck",
  },
  {
    label: "Van",
    setpackage: "van",
    name:"van",
  },
];
const providers = [
  {
    label: "ABC Garrage-250",
    setprovider: "ABCgarrage250",
    name:"ABCgarrage250",
  },
  {
    label: "XYZ Garrage-350",
    setprovider: "XYZgarrage350",
    name:"XYZgarrage350",
  },
  {
    label: "PQR Garrage-150",
    setprovider: "PQRgarrage150",
    name:"PQRgarrage150",
  },
  {
    label: "STW Garrage-500",
    setprovider: "STWgarrage500",
    name:"STWgarrage500",
  },
];
const AddTask = ({ onAdd }) => {
  const [setpackage, setPackage] = useState('')
  const [setprovider, setProvider] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!setpackage) {
      alert('Please add a Name')
      return
    }

    onAdd({setpackage, setprovider})

    setPackage('')
    setProvider('')
    window.location.href = "/Payment";
  }

  return (
    <div className="container package-form ">
      <h3 className="text-white mb-4"> Select Package & Provider</h3>
        <form className='add-form mt-3 mb-3'  onSubmit={onSubmit}>
          <div className="custom-dropdown mt-3">
            <label className="text-white">Select Package :</label>
            <select  onChange={(e) => setPackage(e.target.value)}>
                  {packages.map((option) => (
                    <option value={option.setpackage}>{option.label}</option>
                  ))}
            </select>
          </div>
          <div className="custom-dropdown mt-3">
            <label className="text-white">Select Provider :</label>
            <select  onChange={(e) => setProvider(e.target.value)}>
                  {providers.map((option) => (
                    <option value={option.setprovider}>{option.label}</option>
                  ))}
            </select>
          </div>
          <button type='submit' value='Save Task' className='btn btn-block btn-success mt-4' >Submit</button>
        </form>
    </div>
  )
}

export default AddTask
