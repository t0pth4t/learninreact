const Card = (props) => {
	return (
  	<div style={{margine: '1em'}}>
      <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};



const CardList = (props) => {
	return (
  	<div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

class Form extends React.Component {

handleSubmit = (event) => {
	event.preventDefault();
};

	render() {
  	return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Github username" required />
      <button type="submit">Add card</button>
    </form>
    );
  };
}

class App extends React.Component {

state = {
	cards: [
{
  "login": "substack",
  "id": 12631,
  "avatar_url": "https://avatars3.githubusercontent.com/u/12631?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/substack",
  "html_url": "https://github.com/substack",
  "followers_url": "https://api.github.com/users/substack/followers",
  "following_url": "https://api.github.com/users/substack/following{/other_user}",
  "gists_url": "https://api.github.com/users/substack/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/substack/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/substack/subscriptions",
  "organizations_url": "https://api.github.com/users/substack/orgs",
  "repos_url": "https://api.github.com/users/substack/repos",
  "events_url": "https://api.github.com/users/substack/events{/privacy}",
  "received_events_url": "https://api.github.com/users/substack/received_events",
  "type": "User",
  "site_admin": false,
  "name": "James Halliday",
  "company": "bits.coop",
  "blog": "http://substack.net/",
  "location": "cyberspace",
  "email": null,
  "hireable": true,
  "bio": null,
  "public_repos": 933,
  "public_gists": 545,
  "followers": 11129,
  "following": 225,
  "created_at": "2008-06-04T23:33:44Z",
  "updated_at": "2017-05-19T16:43:38Z"
},
{
  "login": "weierophinney",
  "id": 25943,
  "avatar_url": "https://avatars2.githubusercontent.com/u/25943?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/weierophinney",
  "html_url": "https://github.com/weierophinney",
  "followers_url": "https://api.github.com/users/weierophinney/followers",
  "following_url": "https://api.github.com/users/weierophinney/following{/other_user}",
  "gists_url": "https://api.github.com/users/weierophinney/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/weierophinney/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/weierophinney/subscriptions",
  "organizations_url": "https://api.github.com/users/weierophinney/orgs",
  "repos_url": "https://api.github.com/users/weierophinney/repos",
  "events_url": "https://api.github.com/users/weierophinney/events{/privacy}",
  "received_events_url": "https://api.github.com/users/weierophinney/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Matthew Weier O'Phinney",
  "company": "Zend Technologies",
  "blog": "https://mwop.net/",
  "location": "Sioux Falls, SD, USA",
  "email": null,
  "hireable": null,
  "bio": "Matthew is an expert PHP developer, acting as project lead for @zendframework (Zend Framework and Expressive) and @zfcampus (Apigility).",
  "public_repos": 216,
  "public_gists": 102,
  "followers": 1941,
  "following": 5,
  "created_at": "2008-09-23T17:49:25Z",
  "updated_at": "2017-05-20T20:09:39Z"
}
]
};

	render(){
  	return (
    	<div>
        <Form />
        <CardList cards={this.state.cards} />
      </div>    
    );
  };
}

ReactDOM.render(<App />, mountNode);