/* eslint-disable prettier/prettier */
// import React, { useState,useEffect} from 'react';
// import { StyleSheet,Image, Text, SafeAreaView, TouchableOpacity, ScrollView, View } from 'react-native';

// const Activites = ({ navigation }) => {
//   const [selectedOptions, setSelectedOptions] = useState(Array(30).fill(null));

//   const handleOptionSelect = (questionIndex, optionIndex) => {
//     const updatedOptions = [...selectedOptions];
//     updatedOptions[questionIndex] = optionIndex;
//     setSelectedOptions(updatedOptions);
//     console.log('selectedOptions',JSON.stringify(selectedOptions));
//   };

//   const handleSubmit = async () => {
//     try {
//       console.log('selectedOptions',JSON.stringify(selectedOptions));

//       // Replace 'YOUR_API_ENDPOINT' with your actual backend API endpoint
//       const apiEndpoint = 'YOUR_API_ENDPOINT';
//       const response = await fetch(apiEndpoint, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ selectedOptions }),
//       });

//       // Handle the response from the backend as needed
//       console.log('API Response:', response);
//       console.log('selectedOptions',JSON.stringify(selectedOptions));
//     } catch (error) {
//       console.error('Error submitting quiz:', error);
//     }
//   };

//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const apiEndpoint = 'http://192.168.1.6:5000/fetch_questions';
//         const response = await fetch(apiEndpoint);
//         const data = await response.json();

//         // Update the state with fetched questions
//         setQuestions(data.questions);
//       } catch (error) {
//         console.error('Error fetching questions:', error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const renderOptions = (options) => {
//     return options.map((option, index) => (
//       <TouchableOpacity
//         key={index}
//         style={styles.optionContainer}
//         onPress={() => handleOptionSelect(questionIndex, index)}
//       >
//         <Text style={styles.optionText}>{option}</Text>
//       </TouchableOpacity>
//     ));
//   };

//   const renderQuestions = () => {
//     return questions.map((questionData, questionIndex) => (
//       <View key={questionIndex} style={styles.questionContainer}>
//         <Text style={styles.questionText}>{`Question ${questionIndex + 1}: ${questionData.question}`}</Text>
//         {renderOptions(questionData.options)}
//       </View>
//     ));
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//       <View style={styles.header}>
//           <Image
//             source={require('../../assets/logo.png')} // Update with your actual image path
//             style={styles.logo}
//           />
//           <Text style={styles.title}>Quiz Screen</Text>
//         </View>
//         {questions.map((questionData, questionIndex) => (
//           <View key={questionIndex} style={styles.questionContainer}>
//             <Text style={styles.questionText}>{`Question ${questionIndex + 1}: ${questionData.question}`}</Text>

//             {questionData.options.map((option, optionIndex) => (
//               <TouchableOpacity
//                 key={optionIndex}
//                 style={[
//                   styles.optionContainer,
//                   selectedOptions[questionIndex] === optionIndex && styles.selectedOption,
//                 ]}
//                 onPress={() => handleOptionSelect(questionIndex, optionIndex)}
//               >
//                 <Text style={styles.optionText}>{option}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         ))}

//         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//           <Text style={styles.submitButtonText}>Submit</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   logo: {
//     width: 50, // Adjust the width of the logo as needed
//     height: 50, // Adjust the height of the logo as needed
//     marginRight: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     color: 'black',
//   },
//   questionContainer: {
//     marginBottom: 20,
//     padding: 16,
//     backgroundColor: '#F4F4F4', // Light gray background
//     borderRadius: 8,
//   },
//   questionText: {
//     fontSize: 18,
//     marginBottom: 8,
//     color: 'black',
//   },
//   optionContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//     padding: 8,
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: '#E0E0E0', // Light border color
//   },
//   selectedOption: {
//     backgroundColor: 'lightblue', // Change the color as per your UI theme
//   },
//   optionText: {
//     marginLeft: 8,
//     fontSize: 16,
//     color: 'black',
//   },
//   submitButton: {
//     backgroundColor: 'blue',
//     padding: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   submitButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default Activites;

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const Activities = ({ navigation }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (optionIndex) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(updatedOptions);
  };

  const handleContinue = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const apiEndpoint = 'YOUR_API_ENDPOINT'; // Replace with your actual API endpoint
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedOptions }),
      });

      console.log('API Response:', response);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const apiEndpoint = 'http://192.168.73.244:5000/fetch_questions';
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        setQuestions(data.questions);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const renderOptions = (options, questionIndex) => {
    return options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.optionContainer,
          selectedOptions[questionIndex] === index && styles.selectedOption,
        ]}
        onPress={() => handleOptionSelect(index)}
        disabled={submitted}
      >
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    ));
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <View key={currentQuestionIndex} style={styles.questionContainer}>
        <View style={styles.questionTitleContainer}>
          <Text style={styles.questionText}>{`Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`}</Text>
        </View>
        <View style={styles.optionsContainer}>
          {renderOptions(currentQuestion.options, currentQuestionIndex)}
        </View>
        {currentQuestionIndex === questions.length - 1 ? (
          
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            disabled={submitted}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            disabled={submitted}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <LinearGradient
      colors={['#6441A5', '#2a0845']} // Example gradient colors
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.header}>
            <Image
              source={require('../../assets/logo.png')} // Update with your actual image path
              style={styles.logo}
            />
            <Text style={styles.title}>Quiz Screen</Text>
          </View>
          <View style={styles.centeredContent}>{questions.length > 0 && renderQuestion()}</View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient >

  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  questionContainer: {
    marginBottom: 30,
    padding: 10,
    width: '100%',
    backgroundColor: 'rgba(244, 244, 244, 0.1)',
    // borderRadius: 10,
    alignItems: 'center',
  },
  questionText: {
    fontSize: 18,
    marginBottom: 8,
    color: 'white',

  },
  questionTitleContainer: {
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    // borderRadius: 1,
    borderWidth: 0.8,
    width: '100%',
    borderColor: '#E0E0E0',
  },
  optionsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
  optionText: {
    marginLeft: 8,
    fontSize: 16,
    textAlign: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    color: 'white',
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: 'lightblue',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Activities;
