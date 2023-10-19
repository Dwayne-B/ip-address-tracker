import"./DataContainer.scss"
interface DataContainerProps {
  data: {
    ip: string;
    isp: string;
    location: {
      city: string;
      region: string;
      timezone: string;
      // Add other properties as needed
    };
    // Add other properties as needed
  };
}
function DataContainer({data}:DataContainerProps) {
  return (
<section className="data-container">

<div className="ip-address">
  <label>IP Address</label>
  <p>{data.ip}</p>
</div>
<div className="location">
<label > Location</label>
<p>{`${data.location.city},${data.location.region}`}</p>
</div>
<div className="timezone">
  <label >Timezone</label>
  <p>
    {`UTC ${data.location.timezone}`}
    {/* add offset value dynamically using the API  */}
  </p>
</div>

<div className="isp"><label >  ISP</label>
<p>{`${data.isp}`}</p>
</div>

</section>
  )
}

export default DataContainer