const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  themeColor: state => state.app.themeColor,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles
}
export default getters
