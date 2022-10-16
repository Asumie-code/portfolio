import { styled } from "@mui/system";

const MuiIframe = styled('iframe')({
  width: '100%', 
  height: 550,
  border: 0,
  borderRadius: 10, 
  boxShadow: '10px 10px 10px  rgba(0, 0, 0, 0.2)'
})


const Map = (): JSX.Element => {
  return (
    <MuiIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.343752105046!2d10.194320815218262!3d36.8821239707836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb15b3e11c2b%3A0x1ec720785c4b8654!2sImpasse%20Amine%20Erriahi!5e0!3m2!1sen!2stn!4v1665917456811!5m2!1sen!2stn"  loading="lazy" ></MuiIframe>
  )
}



export default Map



