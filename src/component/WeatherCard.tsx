type dataProp = {
    main:{
      temp: number
    }
  }
type WeatherCardProps = {
    SearchCity: (e:React.KeyboardEvent<HTMLInputElement>) => void 
    data: dataProp | undefined

}
export default function WeatherCard({SearchCity,data}:WeatherCardProps) {
  return (
    <div className="full-card">
        <div style={{width:"50%"}}>
        <div style={{textAlign:"center",fontSize:"1.8rem"}}>Search Your City</div>
        <input onKeyUp={SearchCity} style={{margin:"25px 0",width:"100%",fontSize:"25px",padding:"9px 12px",border:"2px solid black",borderRadius:"15px"}} type="text" />
        <div style={{textAlign:"center",fontSize:"2rem"}}>
            {data?.main?.temp && Math.round(data.main.temp) + "°C"}            
            </div>
        </div>
    </div>
  )
}
