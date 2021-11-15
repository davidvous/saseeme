![saseeme_logo](https://cdn.discordapp.com/attachments/907133739128217621/909832443584970772/unknown.png)
## Saseeme

Sometimes there's just a few things that you like at a restaurant. And all of the times, you'll want to tell your friends and the rest of the world about it. Saseeme is an Untappd clone that allows users to check-in to their favorite restaurant, show their favorite food dish, and comment on it!

## Live Site
[https://saseeme.herokuapp.com/](https://saseeme.herokuapp.com/)

---
### Languages/Libraries Used
- JavaScript
- CSS
- Express
- Sequelize
- React
- Redux

---
### Features
 User Authentication:
 - Log-in / Sign-Up / Demo User
 ### Food Dishes
 Users can:
 - View Food Dishes
 - Create Food Dishes
 - Delete Food Dishes
 - Edit Food Dishes 
 ### Check-ins
 Users can:
 - View their check-ins (as it corresponds to their food dish and associated restaurant)
 - Create a check-in (as it corresponds to their food dish and associated restaurant)
 - Delete their check-in (as it corresponds to their food dish and associated restaurant)
 - Edit Food Dishes ((as it corresponds to their food dish and associated restaurant)
 ### Restaurants
 Users can:
 - View restaurants
 - Add new restaurants
 ---
 ### Wiki
 Please feel visit the [wiki](https://github.com/davidvous/saseeme/wiki) for even more info!
 
---
### Challenges

1. I encountered a number of issues due to setting up my database as [such](https://github.com/davidvous/saseeme/wiki/Database-Schema). The lack of proper join tables such as as that between foods and checkins (creating a many to many relationship( caused several issues with trying to present data in a coherent manner. This also exacerbated issues down the line such as fetching and filtering information appropriately. As major progress had already been made, I had to figure out novel methods to access/filter my data using the basic backend routes in conjunction with prop threading and accessing different Redux slices of state.

Below, you will see an instance of me having to pull slice data and key into the entries I need using Array.filter. Following that, I had to get creative with slice and reverse to display these entries (user-specific comments) in reverse chronological order.
```
 eachCheckinEntry = stateCheckins.filter(each => each.food_id == food_id).slice(0).reverse().map(
        ({comment, updatedAt, id: checkinId, food_id}) => {
          return (
            <div className="checkinComment">
              <span className="checkinCommentFirst">{comment}</span> <span>at {`${new Date(
                updatedAt
              ).toLocaleString()}`}</span>
              <EditCheckinModal
                comment={comment}
                checkinId={checkinId}
                food_id={food_id}
              />
            </div>
          );
        }) 
```

2. I also wanted to have my site be entirely modal. These came with its own issues such as having to nest components, but also having to figure out how to present certain information forms in a specific order so that the data would follow data constraints.

Below is an example of me combining useState with nested components to allow users to switch between modals/forms. 
```
  const [page, setPage] = useState(2);
   const FormTitles = [
    "Add a food dish",
    "Choose which restaurant",
    "Checkin and leave a comment!",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <CreateFood setShowModal={setShowModal} userId={sessionUser.id} setPage={setPage}/>
    } else if (page === 1 ) {
      return (
        <CreateFoodRes setShowModal={setShowModal} userId={sessionUser.id} setPage={setPage} />
        );
      } else if (page === 2) {
        return <CreateCheckin setShowModal={setShowModal} userId={sessionUser.id} setPage={setPage} />;
      }
    };
```
    
    
    



