import { Selector } from 'testcafe';

fixture`CalculatorTest`
    .page("./dist/index.html");

//Multiply Test//


test("testmul", async t => {
    await t
    .typeText("#numA", "1")
    .typeText("#numB", "2")
    .click("#mul")

    .expect(Selector("#result").innerText).eql("3").wait(1000); // Adjust the wait time as needed


//     await t
// .typeText("#numA", "1")
// .typeText("#numB", "2")
// .click("#mul")

// .expect(Selector("#result").innerText).eql("");

//.expect(Selector("#result").innerText).eql("2");
});

/* 
//Addition Test//
test("testadd", async t => {
    await t
.typeText("#numA", "400")
.typeText("#numB", "600")
.click("#add")

.expect(Selector("#result").innerText).eql("1000");
});


//Division Test//
test("testdiv", async t => {
    await t
.typeText("#numA", "8")
.typeText("#numB", "4")
.click("#div")

.expect(Selector("#result").innerText).eql("2");
});


//Subtraction Test//
test("testsub", async t => {
    await t
.typeText("#numA", "10")
.typeText("#numB", "4")
.click("#sub")


.expect(Selector("#result").innerText).eql("6");
}); */