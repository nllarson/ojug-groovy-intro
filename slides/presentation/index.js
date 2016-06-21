// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  groovyLogo: require("../assets/groovy-logo-white.png"),
  opiLogo: require("../assets/opi-logo-long.png"),
  githubLogo: require("../assets/github-logo.png")
};

preloader(images);

const theme = createTheme({
  primary: "#eecdc4"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="bar">
          <Slide transition={["zoom"]} bgColor="lightgrey" bgImage={images.groovyLogo.replace("/", "")} bgDarken={0.25} >
            <Heading size={1} caps fit lineHeight={1.5} textColor="black">
              Intro To Groovy
            </Heading>
          </Slide>
          <Slide transition={["zoom"]} bgColor="lightgrey" >
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Nick Larson
            </Heading>
            <Heading><Image width="400px" src={images.opiLogo}/></Heading>
            <List>
              <ListItem>@nllarson</ListItem>
              <ListItem>nicklas.larson@gmail.com</ListItem>
              <ListItem><Link href="https://github.com/nllarson/ojug-groovy-intro" textColor="black">https://github.com/nllarson/ojug-groovy-intro</Link></ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom","fade"]} bgColor="lightgrey" notes="Builds upon the strengths of Java but has additional power features inspired by languages like Python, Ruby and Smalltalk">
            <BlockQuote>
              <Quote textColor="black" textSize="35px">
                Groovy is a powerful, optionally typed and dynamic language, with static-typing and static compilation capabilities, for the Java platform aimed at improving developer productivity thanks to a concise, familiar and easy to learn syntax. It integrates smoothly with any Java program, and immediately delivers to your application powerful features, including scripting capabilities, Domain-Specific Language authoring, runtime and compile-time meta-programming and functional programming.
              </Quote>
              <Cite>http://groovy-lang.com</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["zoom","fade"]} bgColor="lightgrey" >
            <Heading size={2} lineHeight={0.5} fit caps>
              Key Features
            </Heading>
            <List>
              <ListItem>Dynamically typed</ListItem>
              <ListItem>Intuitive - it tries to do the right thing by default</ListItem>
              <ListItem>Interoperability with Java -> Groovy is Java</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom","fade"]} bgColor="lightgrey" >
            <Heading size={2} lineHeight={0.5} fit caps>
              Differences from Java
            </Heading>
            <List>
              <ListItem>Optional Typing</ListItem>
              <ListItem>Methods, properties can be added to classes at runtime</ListItem>
              <ListItem>Relaxed Script-like Syntax</ListItem>
              <ListItem>Optional semicolons, parentheses, returns</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom","fade"]} bgColor="lightgrey" >
            <Heading size={2} lineHeight={0.5} fit caps>
              Added Features
            </Heading>
            <List>
              <ListItem>Native syntax for lists, maps, and ranges</ListItem>
              <ListItem>Support embedded expressions in Strings</ListItem>
              <ListItem>Additional operators: Null safe, Elvis, etc</ListItem>
              <ListItem>Closures</ListItem>
              <ListItem>Operator overloading</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Text fit>All data types are objects. Primitives can be used but are autoboxed.</Text>
            <CodePane
              textSize="23px"
              lang="groovy"
              source={require("raw!../assets/code/datatypes.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Text caps><b>String</b> literal uses single quotes</Text>
            <CodePane
              textSize="23px"
              lang="groovy"
              source={require("raw!../assets/code/strings.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Text caps>Groovy Strings aka <b>GStrings</b></Text>
              <List>
                <ListItem>GString literals specified with double quotes</ListItem>
                <ListItem>supports embedded expressions</ListItem>
                <ListItem>braces are optional for simple expressions</ListItem>
                <ListItem>triple quote for multi-line GStrings (handy for XML/json)</ListItem>
              </List>
            <Appear><CodePane
              fit
              textSize="23px"
              lang="groovy"
              source={require("raw!../assets/code/gstrings.example")}
              margin="20px auto"
            /></Appear>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" notes="Groovy Is Object Oriented">
            <Text caps>A Groovy Class</Text>
            <CodePane
              fit
              textSize="23px"
              lang="groovy"
              source={require("raw!../assets/code/employeeClass.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" notes="No constructor needed!!!!">
            <Text caps>Constructing New Objects</Text>
            <CodePane
              fit
              textSize="23px"
              lang="groovy"
              source={require("raw!../assets/code/classConstruction.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Text caps>Methods</Text>
            <CodePane
              fit
              textSize="23px"
              lang="groovy"
              source={require("raw!../assets/code/methodSignature.example")}
              margin="20px auto"
            />
            <Appear><CodePane
              fit
              textSize="23px"
              lang="groovy"
              source={require("raw!../assets/code/method.toString.example")}
              margin="20px auto"
            /></Appear>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Text caps>Groovier Methods</Text>
            <List>
              <ListItem>scope is optional - default is public</ListItem>
              <ListItem>return type is optional - use <b>def</b> keyword</ListItem>
              <ListItem>types are optional for method arguments</ListItem>
              <ListItem>method arguments can be defaulted</ListItem>
              <ListItem>return keyword is optional</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Text caps>Java Method</Text>
            <CodePane
              fit
              textSize="23px"
              lang="java"
              source={require("raw!../assets/code/methodJava.example")}
              margin="20px auto"
            />
          <Appear><Text caps>Groovy Method</Text></Appear>
          <Appear>
              <CodePane
              fit
              textSize="23px"
              lang="groovy"
              source={require("raw!../assets/code/methodGroovy.example")}
              margin="20px auto"/>
              </Appear>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Text caps>Calling Methods</Text>
            <CodePane
              fit
              textSize="20px"
              lang="groovy"
              source={require("raw!../assets/code/callingMethod.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Heading size={2} lineHeight={0.5} fit>
              Conditionals
            </Heading>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey">
            <Text caps>Groovy Truthiness</Text>
            <List>
              <Appear><ListItem margin="20px auto"><Code>null</Code>, <Code>0</Code>, <Code>''</Code>, <Code>[]</Code>, <Code>[:]</Code> evaluate to FALSE</ListItem></Appear>
              <Appear><ListItem margin="20px auto"><Code>==</Code> is the equivelent of <Code>a.equals(b)</Code></ListItem></Appear>
              <Appear><ListItem margin="20px auto">If <Code>Comparable</Code>, <Code>a.compareTo(b)==0</Code></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" align="center flex-start" >
              <CodePane
                fit
                textSize="20px"
                lang="groovy"
                source={require("raw!../assets/code/moreOperators.example")}
                margin="5px auto"
              />
              <Link href="http://groovy-lang.org/operators.html">http://groovy-lang.org/operators.html</Link>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey">
            <Text caps>Regular Expressions</Text>
              <CodePane
                fit
                textSize="20px"
                lang="groovy"
                source={require("raw!../assets/code/regex.example")}
                margin="5px auto"
              />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" align="center flex-start" >
              <CodePane
                textSize="20px"
                lang="groovy"
                source={require("raw!../assets/code/operators.example")}
                margin="5px auto"
              />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" align="center flex-start" >
            <Text fit>All operators are method calls under the covers and these method calls can be overwritten</Text>
              <CodePane
                fit
                textSize="20px"
                lang="groovy"
                source={require("raw!../assets/code/operatorOverload.example")}
                margin="5px auto"
              />
              <Link href="http://groovy-lang.org/operators.html#Operator-Overloading">http://groovy-lang.org/operators.html#Operator-Overloading</Link>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Heading size={2} fit>
              Example 1
            </Heading>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Heading size={2} lineHeight={0.5} fit>
              Collections
            </Heading>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Text caps>Closures</Text>
            <List>
              <ListItem>Similar to Lambdas</ListItem>
              <ListItem>Can be called like a method</ListItem>
            </List>
            <CodePane
              fit
              textSize="23px"
              lang="groovy"
              source={require("raw!../assets/code/closures.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey">
            <Text caps>Lists</Text>
              <CodePane
                fit
                textSize="20px"
                lang="groovy"
                source={require("raw!../assets/code/collections.list1.example")}
                margin="5px auto"
              />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey">
              <Text caps>Looping</Text>
              <CodePane
                fit
                textSize="20px"
                lang="groovy"
                source={require("raw!../assets/code/collections.list2.example")}
                margin="5px auto"
              />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" align="center flex-start" >
              <Text caps>Searching</Text>
              <CodePane
                fit
                textSize="20px"
                lang="groovy"
                source={require("raw!../assets/code/collections.list3.example")}
                margin="5px auto"
              />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Text caps>Sorting</Text>
            <List>
              <ListItem><Code>.sort()</Code> can be called on any collection</ListItem>
              <ListItem><Code>.sort()</Code> can take a closure, no comparators</ListItem>
              <ListItem><Code>.sort(false)</Code> does not modify the collection</ListItem>
            </List>
            <CodePane
              fit
              textSize="20px"
              lang="groovy"
              source={require("raw!../assets/code/collections.list4.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" align="center flex-start" >
            <Text caps>Destructive Methods</Text>
            <Text fit>Some methods mutate the list, others return a modified list.</Text>
            <CodePane
              fit
              textSize="20px"
              lang="groovy"
              source={require("raw!../assets/code/collections.destructiveMethods.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Heading size={2} fit>
              Example 2
            </Heading>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey">
            <Text caps>Maps</Text>
              <CodePane
                fit
                textSize="20px"
                lang="groovy"
                source={require("raw!../assets/code/collections.map1.example")}
                margin="5px auto"
              />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey"  align="center flex-start" >
              <Text caps>Access</Text>
              <CodePane
                fit
                textSize="20px"
                lang="groovy"
                source={require("raw!../assets/code/collections.map2.example")}
                margin="5px auto"
              />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey">
              <Text caps>Looping</Text>
              <CodePane
                fit
                textSize="20px"
                lang="groovy"
                source={require("raw!../assets/code/collections.map3.example")}
                margin="5px auto"
              />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey">
              <Text caps>Sorting</Text>
              <CodePane
                fit
                textSize="18px"
                lang="groovy"
                source={require("raw!../assets/code/collections.map4.example")}
                margin="5px auto"
              />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey">
            <Text caps>Ranges</Text>
              <CodePane
                fit
                textSize="20px"
                lang="groovy"
                source={require("raw!../assets/code/collections.range1.example")}
                margin="5px auto"
              />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Heading size={2} fit>
              Example 3
            </Heading>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Heading size={2} lineHeight={0.5} fit>
              Metaclass Programming
            </Heading>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey">
            <Text caps>MetaClass Example</Text>
              <Text fit>Add a toSnakeCase method to the String class that converts the string to snake-case</Text>
              <Appear><CodePane
                fit
                textSize="20px"
                lang="groovy"
                source={require("raw!../assets/code/metaclass.example")}
                margin="5px auto"
              /></Appear>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" notes="Modifying metaclass can be useful for framework development, but can also be confusing">
            <Text caps>MetaClass Object Example</Text>
            <Text fit>Add an addQuestionMark method to a String object that adds a question mark to the end of the string</Text>
            <Appear><CodePane
              fit
              textSize="20px"
              lang="groovy"
              source={require("raw!../assets/code/metaclass.object.example")}
              margin="5px auto"
            /></Appear>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Heading size={2} lineHeight={0.5} fit>
              Traits
            </Heading>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey">
            <Text caps>Trait Example</Text>
            <CodePane
                fit
                textSize="20px"
                lang="groovy"
                source={require("raw!../assets/code/trait1.example")}
                margin="5px auto"
            />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey">
            <Text caps>Trait Usage</Text>
            <CodePane
                fit
                textSize="20px"
                lang="groovy"
                source={require("raw!../assets/code/trait2.example")}
                margin="5px auto"
            />
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Text fit>Traits are great for adding reusable capabilities to a class without requiring large inheritance tree</Text>
              <Text textAlign="center" margin="20px auto">Public fields</Text>
              <Text textAlign="center" margin="20px auto">Methods</Text>
              <Text textAlign="center" margin="20px auto">Private variables</Text>
              <Text textAlign="center" margin="20px auto">Abstract methods</Text>
            <Text fit>If multiple traits have the same method, the last trait in the 'implements' list wins</Text>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Heading size={2} fit>
              Example 4
            </Heading>
          </Slide>
          <Slide transition={["slide","fade"]} bgColor="lightgrey" >
            <Heading size={2} lineHeight={0.5} fit>
              Reference
            </Heading>
            <List>
              <ListItem><Link href="http://groovy-lang.org" textColor="black">http://groovy-lang.org</Link></ListItem>
              <ListItem><Link href="http://stackoverflow.com/tags/groovy/info" textColor="black">http://stackoverflow.com/tags/groovy/info</Link></ListItem>
              <ListItem><Link href="http://www.manning.com/koenig2/" textColor="black">http://www.manning.com/koenig2/</Link></ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
