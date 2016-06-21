// Groovy Workshop #2 - Collections - Lists

import spock.lang.*

class Workshop2Spec extends Specification {

  /*
  *   Find how many entries are in a list.
  */
  def "2.1 - list size"() {
    given:
      def theList = [1, 2, 3, 4, 5]

    when:
      // TODO: find the size of theList
      def listSize

    then:
      listSize == 5
  }

  /*
  *   Find the 3rd entry in the list
  */
  def "2.2 - list entry access"() {
    given:
      def theList = ['a', 'b', 'c', 'd', 'e']

    when:
      // TODO: find the 3rd entry in theList
      def thirdEntry

    then:
      thirdEntry == 'c'
  }

  /*
  *   Using the .collect method, build a list containing the
  *   firstName of each person in peopleList
  */
  def "2.3 - list iteration - collect"() {
    given:
      def peopleList = [
        new Person(firstName: 'Sterling', middleName: 'Malory', lastName: 'Archer'),
        new Person(firstName: 'Malory', middleName: 'Duchess', lastName: 'Archer'),
        new Person(firstName: 'Lana', middleName: 'Anthony', lastName: 'Kane'),
        new Person(firstName: 'Cyril', lastName: 'Figgis'),
        new Person(firstName: 'Cheryl', lastName: 'Tunt'),
        new Person(firstName: 'Pam', lastName: 'Poovey'),
        new Person(firstName: 'Algernop', lastName: 'Krieger'),
        new Person(firstName: 'Ray', lastName: 'Gillette')
      ]
    when:
      // TODO: collect the first names
      def firstNames = []

    then:
      firstNames.size() == 8
      firstNames == ['Sterling', 'Malory', 'Lana', 'Cyril', 'Cheryl', 'Pam', 'Algernop', 'Ray']
  }

  /*
  *   Using the spread operator (*.), build a list containing the
  *   middleNames of each person in peopleList. Use the minus operator
  *   to remove null entries.
  */
  def "2.4 - list iteration - spread operator"() {
    given:
      def peopleList = [
        new Person(firstName: 'Sterling', middleName: 'Malory', lastName: 'Archer'),
        new Person(firstName: 'Malory', middleName: 'Duchess', lastName: 'Archer'),
        new Person(firstName: 'Lana', middleName: 'Anthony', lastName: 'Kane'),
        new Person(firstName: 'Cyril', lastName: 'Figgis'),
        new Person(firstName: 'Cheryl', lastName: 'Tunt'),
        new Person(firstName: 'Pam', lastName: 'Poovey'),
        new Person(firstName: 'Algernop', lastName: 'Krieger'),
        new Person(firstName: 'Ray', lastName: 'Gillette')
      ]
    when:
      // TODO: build a list of middle names, remove any NULL
      def middleNames = []

    then:
      middleNames.size() == 3
      middleNames == ['Malory', 'Duchess', 'Anthony']
  }

  /*
  *   Use .find to get the first person in peopleList with the lastName of 'Archer'
  */
  def "2.5 - list filter - find"() {
    given:
      def peopleList = [
        new Person(firstName: 'Sterling', middleName: 'Malory', lastName: 'Archer'),
        new Person(firstName: 'Malory', middleName: 'Duchess', lastName: 'Archer'),
        new Person(firstName: 'Lana', middleName: 'Anthony', lastName: 'Kane'),
        new Person(firstName: 'Cyril', lastName: 'Figgis'),
        new Person(firstName: 'Cheryl', lastName: 'Tunt'),
        new Person(firstName: 'Pam', lastName: 'Poovey'),
        new Person(firstName: 'Algernop', lastName: 'Krieger'),
        new Person(firstName: 'Ray', lastName: 'Gillette')
      ]
    when:
      // TODO: Find the first with last name 'Archer'
      def person

    then:
      person.firstName == 'Sterling'
      person.middleName == 'Malory'
      person.lastName == 'Archer'
  }

  /*
  *   Use .findAll to get all persons in peopleList with the lastName of 'Archer'
  */
  def "2.6 - list filter - findAll"() {
    given:
      def peopleList = [
        new Person(firstName: 'Sterling', middleName: 'Malory', lastName: 'Archer'),
        new Person(firstName: 'Malory', middleName: 'Duchess', lastName: 'Archer'),
        new Person(firstName: 'Lana', middleName: 'Anthony', lastName: 'Kane'),
        new Person(firstName: 'Cyril', lastName: 'Figgis'),
        new Person(firstName: 'Cheryl', lastName: 'Tunt'),
        new Person(firstName: 'Pam', lastName: 'Poovey'),
        new Person(firstName: 'Algernop', lastName: 'Krieger'),
        new Person(firstName: 'Ray', lastName: 'Gillette')
      ]
    when:
      // TODO: Find all the Archers
      def archers = []

    then:
      archers.size() == 2
      archers.every{it.lastName == 'Archer'}
  }

  /*
  *   Use .findAll to get all persons in peopleList with the lastName of that
  *   ends with 'er'
  *
  *   Hint:  Strings have a method .endsWith() that takes a String, use This
  *     in conjunction with the .findAll
  */
  def "2.7 - list filter - findAll"() {
    given:
      def peopleList = [
        new Person(firstName: 'Sterling', middleName: 'Malory', lastName: 'Archer'),
        new Person(firstName: 'Malory', middleName: 'Duchess', lastName: 'Archer'),
        new Person(firstName: 'Lana', middleName: 'Anthony', lastName: 'Kane'),
        new Person(firstName: 'Cyril', lastName: 'Figgis'),
        new Person(firstName: 'Cheryl', lastName: 'Tunt'),
        new Person(firstName: 'Pam', lastName: 'Poovey'),
        new Person(firstName: 'Algernop', lastName: 'Krieger'),
        new Person(firstName: 'Ray', lastName: 'Gillette')
      ]
    when:
      // TODO: Find people with lastNames that end in 'er'
      def people = []

    then:
      people.size() == 3
  }

  /*
  *   Build a list of Person's names (sayName()), then sort that list.
  */
  def "2.8 - list sort"() {
    given:
      def peopleList = [
        new Person(firstName: 'Sterling', middleName: 'Malory', lastName: 'Archer'),
        new Person(firstName: 'Malory', middleName: 'Duchess', lastName: 'Archer'),
        new Person(firstName: 'Lana', middleName: 'Anthony', lastName: 'Kane'),
        new Person(firstName: 'Cyril', lastName: 'Figgis'),
        new Person(firstName: 'Cheryl', lastName: 'Tunt'),
        new Person(firstName: 'Pam', lastName: 'Poovey'),
        new Person(firstName: 'Algernop', lastName: 'Krieger'),
        new Person(firstName: 'Ray', lastName: 'Gillette')
      ]
    when:
      // TODO: Collect people's names
      def names = []

      // TODO: Store the list of names in alphabetical order, without modifying the original list.
      def sortedNames = []

    then:
      names.size() == 8
      names == ['Sterling Malory Archer',
      'Malory Duchess Archer',
      'Lana Anthony Kane',
      'Cyril Figgis',
      'Cheryl Tunt',
      'Pam Poovey',
      'Algernop Krieger',
      'Ray Gillette']

      sortedNames.size() == 8
      sortedNames == ['Algernop Krieger',
      'Cheryl Tunt',
      'Cyril Figgis',
      'Lana Anthony Kane',
      'Malory Duchess Archer',
      'Pam Poovey',
      'Ray Gillette',
      'Sterling Malory Archer']
  }
}
