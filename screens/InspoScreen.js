import { useState } from "react";
import { INSPOQUOTES } from "../shared/inspoQuotes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Share, Text, View } from "react-native";
import { Card, Input, Icon } from "react-native-elements";

//could be cool to try to create a new list of productive quotes with a button to randomly generate one.... then allow someone to share that out?
const InspoScreen = () => {
    const [author, setAuthor] = useState('');
    const [quote, setQuote] = useState('');
    const [quoteList, setQuoteList] = useState(INSPOQUOTES);
    const [randomQuote, setRandomQuote] = useState(null);

    const baseUrl = 'http://10.0.0.55:3001/';

    const genRandomQuote = () => {
        const randomQ = quoteList[Math.floor(Math.random() * quoteList.length)]

        setRandomQuote(randomQ);

    };

    const shareInspoQuote = (title, message, url) => {
        Share.share(
            {
                title: 'Cool Insp Quote!',
                message: `I'd like to share this ${title}: ${message} ${url}`,
                url
            },
            {
                dialogTitle: 'Share ' + title
            }
        )
    };
    const handleQuoteSubmit = () => {
        const newQuote = {
            author,
            quote
        };
        setQuoteList(quoteList.concat(newQuote))
        console.log(quoteList)
        console.log(quoteList.length)
        resetForm();
    }
    const resetForm = () => {
        setAuthor('');
        setQuote('');

    }

    return (
        <>
            <Card>
                <Card.Title>Inspirational Quotes</Card.Title>
                <Card.Divider />
                <TouchableOpacity
                    style={{ backgroundColor: '#74a0ef', alignItems: 'center', padding: 10, }}
                    onPress={() => genRandomQuote()}
                >
                    <Text>Generate Quote</Text>
                </TouchableOpacity>
                {/* why can't the following code go into the return statement of randomQuote?*/}
                {randomQuote && (
                    <View>
                        <Text style={{ margin: 10 }}>{randomQuote.quote}</Text>
                        <Text style={{ color: 'gray', fontStyle: 'italic', margin: 10 }}>
                            -{randomQuote.author}
                        </Text>
                    </View>
                )}
                <Icon
                    name='share'
                    type='font-awesome'
                    color='#74a0ef'
                    raised
                    reverse
                    onPress={() =>
                        shareInspoQuote(
                            randomQuote.quote,
                            randomQuote.author,
                            baseUrl + 'Inspiration'
                        )
                    }
                />
            </Card>
            <Card>
                <Card.Title>Add an Inspo Quote to the list!</Card.Title>
                <Input
                    placeholder='Add Quote'
                    leftIcon={{ type: 'font-awesome', name: 'book' }}
                    onChangeText={(quote) => setQuote(quote)}
                    value={quote}
                />
                <Input
                    placeholder='Add Author'
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(author) => setAuthor(author)}
                    value={author}
                />
                <TouchableOpacity
                    style={{ backgroundColor: '#74a0ef', alignItems: 'center', padding: 10 }}
                    onPress={() => handleQuoteSubmit()}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </Card>


        </>
    )

};

export default InspoScreen;


// return (
//     <>
//         < View >
//             <Text>{randomQuote.quote}</Text>
//             <Text style={{ color: 'gray', fontStyle: 'italic' }}>-{randomQuote.author}</Text>
//         </View >
//     </>
// )