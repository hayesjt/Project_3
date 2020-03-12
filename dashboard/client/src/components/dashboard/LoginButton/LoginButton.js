import React from 'react';
import { createApiRequest, aggPostReq } from './requests';
import axios from 'axios';

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      fitResponse: []
    };
  }

  async getData(accessToken) {

    const instance = axios.create({
      baseURL: 'https://www.googleapis.com/fitness/',
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    instance.post("v1/users/me/dataset:aggregate", {
      aggregateBy: aggPostReq.aggregateBy,
      startTimeMillis: 1580595182 * 1000,
      endTimeMillis: 1583634633 * 1000,
      bucketByTime: {
        durationMillis: 86400000
      }
    })
      .then(res => {
        console.log(res);
        console.log(res.data.bucket);
        localStorage.setItem("fitResponse", JSON.stringify(res.data.bucket));
        this.setState({ fitResponse: res.data.bucket })
        return (res.data.bucket);

      })
      .catch(err => {
        console.log(err)
      })


  }

  toggleLoggedIn = () =>
    this.setState(state => {
      return { isLoggedIn: !state.isLoggedIn };
    });

  onSignIn = googleUser => {
    this.toggleLoggedIn();

    let user = googleUser.getBasicProfile();
    let id_token = googleUser.getAuthResponse().id_token;


    let accessToken = googleUser.getAuthResponse().access_token;

    console.log('google user obj', user);
    console.log('google_id_token', id_token);
    console.log('accessToken', accessToken);

    console.log('Name: ' + user.getName());
    console.log('Image URL: ' + user.getImageUrl());
    console.log('Email: ' + user.getEmail());

    localStorage.setItem('id_token', id_token);
    localStorage.setItem('accessToken', accessToken);

    this.getData(accessToken);


  };

  todayActivity = () => {
    const todayDate = this.state.fitResponse.length
    const calories = this.state.fitResponse[todayDate].dataset[1].point[0].value[0].fpVal
    this.setState({ calories: calories })
  }

  renderGoogleLoginButton = () => {
    console.log('rendering google signin button');
    window.gapi.signin2.render('signIn', {
      scope: 'profile email https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.body.read https://www.googleapis.com/auth/fitness.location.read',
      width: 150,
      height: 25,
      longtitle: true,
      theme: 'light',
      onsuccess: this.onSignIn
    });
  };

  logout = () => {
    console.log('in logout');

    let auth2 = window.gapi && window.gapi.auth2.getAuthInstance();
    if (auth2) {
      auth2
        .signOut()
        .then(() => {
          this.toggleLoggedIn();
          console.log('Logged out successfully');
        })
        .catch(err => {
          console.log('Error while logging out', err);
        });
    } else {
      console.log('error while logging out');
    }
  };

  componentDidMount() {
    window.addEventListener('google-loaded', this.renderGoogleLoginButton);
    window.gapi && this.renderGoogleLoginButton();
  }

  render() {
    // noinspection CheckTagEmptyBody
    return (
      <div>
        <div id="signIn"></div>
        <br />
        {this.state.isLoggedIn && (
          <button style={{ width: 150, height: 25, textAlign: 'center' }} onClick={this.logout}>
            Logout of Google
          </button>
        )}
        {/* <div>
          {this.state.fitResponse.map(data =>{
            let day = data.dataset[0].point[0] && new Date(data.dataset[0].point[0].endTimeNanos / 1000000).getDate()
            return(
            <div>
            <div>start:{data.startTimeMillis}</div>
            <div>end:{data.endTimeMillis}</div>
            <div>{day}</div>
            {data.dataset[0].point[0] ?
            <div>
              <div>calories: {data.dataset[1].point[0].value[0].fpVal}</div>
            <div>steps:{data.dataset[0].point[0].value[0].intVal}</div></div> : ''}
            </div>)
          })}
        </div> */}
      </div>
    );
  }
}

export default (LoginButton);
