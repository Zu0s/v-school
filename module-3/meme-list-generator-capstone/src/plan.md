CAPSTONE IDEAS

parts of capstone

    Main meme generator component
        states
            current meme
                displays current information for the meme shown on screen
                    top text
                    bottom text
                    url
                    id
                        has a default value 
                        * value will be changed in SAVE / DISPLAY stage *

            all memes
                memes saved from api call

                memes saved from user


        text
            top / bottom text input
                function to save text to STATE when entered


        meme / changing meme
            img for displaying memes
                displayed image is from state

            button for changing memes
                function to activate on button click
                    this function is random num for index

-----------------------------------------------------------------------------------------------------

    Saving / Displaying saved memes
        saving
            button with on click for saving current meme

            function
                * by checking if id in current meme is no default can be used for later (editing) *

                1 push
                    pushes the current meme STATE into the array held in all memes STATE
                    
                    needs to wipe the text from curent meme (set state inside set state possbily)

                    alert method to inform user that their meme has been saved

                2 replace
                    replaces the current meme with whatever it was located in the original STATE
                    
                    needs to wipe the text from curent meme (set state inside set state possbily)

                    alert method to inform user that their meme has been edited 

        displaying
            adding id
                instead of mapping array from all memes STATE use for loop
                    i = id value to make editing, deleting, finding the meme easier

            component
                the saved memes will be a component so we can use two function (edit / delete)

-----------------------------------------------------------------------------------------------------

    Deleting
        button
            in component delete button that runs function from main app

        function
            pass props.id from component (in a way it works duh)
            finds meme from id to remove said array item

-----------------------------------------------------------------------------------------------------

    Editing
        button
            in component edit button that runs function from main app
            
        function
            pass props.id from component (in a way it works duh)
            replaces the current meme STATE with information from index array item
        
        saving new edit
            SAVE FUNCTION checks if not default id value if not it uses the id and replace the array item with current meme STATE





EXTRA NOTES

    deleting should be the easiest but will have to refresh with how to remove a single array item

    edit poses the second most problems by far

    

    id value
        need a default id value in current meme STATE that WILL NOT be passed to the saved memes array on creation

        id value will be created for the saved user memes when it is for looped because the id will be the index value of the saved meme 

        poses probably bigger problems than edit

    conditional render CHANGE MEME button
        if the id value for current meme is not the same as default

        DOES NOT allow user to change the picture when editing as change meme will be non exsistant