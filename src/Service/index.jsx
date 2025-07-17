export const upvote = (id) => {
   //feting the vote for id
   const votes = localStorage.getItem('votes') ?
      JSON.parse(localStorage.getItem('votes'))
      //for frist time upvote 
      : {
         upvotes: [],
         downvotes: [],
      }
   if (votes.upvotes.indexOf(id) !== -1) {
      return false;
   }
   votes.upvotes.push(id);
   const downvotes = votes.downvotes?.filter(item => item != id);
   votes.downvotes = downvotes;

   localStorage.setItem('votes', JSON.stringify(votes));
   return true
}

export const downvotes =  (id) => {
   // creating code for downvote
const votes= localStorage.getItem('votes')?
JSON.parse(localStorage.getItem('votes')):
{
   upvotes:[],
   downvotes: []
}
if(votes.downvotes.indexOf(id)!== -1){
   return false;

}
votes.downvotes.push(id);
const upvotes= votes.upvotes?.filter(item => item != id)
votes.upvotes=upvotes;
localStorage.setItem('votes' , JSON.stringify(votes))
return true
}