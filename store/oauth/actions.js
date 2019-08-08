export default {
  async register({commit}, {email, password, firstName, lastName}) {
    const data = await this.$axios.$post('/api/oauth/register', {
      register: {
        email: email,
        plain_password: password,
        first_name: firstName,
        last_name: lastName
      }
    });

    console.log(data);
  }
}
