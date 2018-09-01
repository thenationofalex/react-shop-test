export default function handleChange (e) {
  const target = e.target
  const value = target.value
  const name = target.id
  console.log(name, value)
  this.setState({
    [name]: value.toString()
  })
}
