import { Selector } from 'testcafe';

fixture`CalculatorTest`
    .page('http://localhost:5173/');


    const result = Selector('#result');

//Multiply Test//

test("testmul", async t => {
    await t
    .typeText("#numA", '1')
    .typeText("#numB", '2')
    .click("#mul")

    .expect(result.textContent).eql('2');
});


//Addition Test//
test("testadd", async t => {
    await t
.typeText("#numA", "400")
.typeText("#numB", "600")
.click("#add")

.expect(result.textContent).eql('1000');
});


//Division Test//
test("testdiv", async t => {
    await t
.typeText("#numA", "8")
.typeText("#numB", "4")
.click("#div")

.expect(result.textContent).eql('2');
});


//Subtraction Test//
test("testsub", async t => {
    await t
.typeText("#numA", "10")
.typeText("#numB", "4")
.click("#sub")


.expect(result.textContent).eql('6');
});