import Dark from './Dark'
import Light from './Light'

const theme = mode => (mode === "dark" ? Dark: Light)

export default theme