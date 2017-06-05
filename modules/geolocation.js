getLocation() {
  navigator.geolocation.getCurrentPosition(
    (posData) => console.log(posData),
    (error) => alert(error),
    {timeout:10000}
  )
}
