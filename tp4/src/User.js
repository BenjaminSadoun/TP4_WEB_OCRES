import React, {Component} from 'react';
import Navig from './Navig'
import './User.css'

class User extends Component {
  constructor(props){
    super(props);
    this.state ={
      profils : [
        {
          id : 1,
          firstname: "Sandra",
          lastname: "Tang",
          birthday : "01/03/1999",
          post : [{
            date : "20/10/2020",
            title : "Mon voyage à Séville",
            content :" J'ai passé un magnifique séjour à Séville avec mon copain, il a fait beau et j'ai eu beaucoup de chance. Il m'a fait une super surprise et je suis super contente d'avoir pu prendre un peu de soleil avant de retourner dans l'hiver froid qu'on a à Paris. J'espère que vous allez tous bien et on essaie de se voir quand je rentre. Bisou",
            like : 210,
          }],
        },
        {
          id : 2,
          firstname: "David",
          lastname: "Wang",
          birthday : "09/11/1999",
          post : [{
            date : "18/10/2020",
            title : "Mes nouvelles chaussures",
            content :"Bonjour à tous, je viens de réussir à récupérer la Jordan 1 rétro High Dior. Je suis super content il y avait vraiment très peu de paire dispo. Si jamais tu es interessé envoi moi un message je compte la mettre en vente. Si vous la chercher sur Internet, vous pourrez voir le prix : elle coûte 10000€ sur Restocks !! Mp moi !",
            like : 197,
          }],
        },
        {
          id : 3,
          firstname: "Grace",
          lastname: "Gnenago",
          birthday : "26/04/2000",
          post : [{
            date : "16/10/2020",
            title : "Enfin en vacances! Je suis nostalgique",
            content :"Salut tout le monde! Comment vous allez? Moi je suis enfin en vacances !!! (pour une semaine mais bon c'est déjà ca!). La Corée me manque trop!! Surtout les idées de Benji comme faire une excursion de 10h alors que j'étais en jean converse et en converse!! Mais bon on s'est tellement amusé... dire qu'il y a un an on y était encore...",
            like : 192,
          }],
        },
      ]
    }
  }
  render(){
    return (
      <div className="user">
        <h1 className="blue-text">Facebook</h1>
        <Navig profils={this.state.profils}/>
      </div>
    );
  }
}

export default User;
