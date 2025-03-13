from re import S
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
import datetime
app = Flask(__name__)

grid_answers = {
    "0": {
        "input": "2",
    },

    "1": {
        "input": "5",
    },

    "2": {
        "input": "1",
    },

    "3": {
        "input": "2",
    },

    "4": {
        "input": "5",
    },

    "5": {
        "input": "2",
    },

    "6": {
        "input": "1",
    },
  
    "7": {
        "input": "4",
    },

    "8": {
        "input": "1",
    },

    "9": {
        "input": "6",
    },

    "10": {
        "input": "5",
    },

    "11": {
        "input": "6",
    },

    "12": {
        "input": "5",
    },

    "13": {
        "input": "3",
    },

    "14": {
        "input": "2",
    },

    "15": {
        "input": "5",
    },

    "16": {
        "input": "4",
    },
}

practice_data = {
    "1":{
        "practice_id": "1",
        "title": "Practice Play",
        "subtitle": "Using the strategies you just learned, let's practice!",
        "text": "Which number goes in the missing box?",
        "image": "../static/images/practice1.png",
        "button_text": "Next Practice",
        "next_practice": "2",
        "button_submit_text": "Submit",
        "answer": "9",
        "correct_statement":"Correct! The missing number is 9!",
        "wrong_statement":"The answer is incorrect!",
    },
    "2":{
        "practice_id": "2",
        "title": "Practice Play",
        "subtitle": "Using the strategies you just learned, let's practice!",
        "text": "Which number goes in the missing box?",
        "image": "../static/images/practice2.png",
        "button_text": "Next Pactice",
        "next_practice": "3",
        "button_submit_text": "Submit",
        "answer": "4",
        "correct_statement":"Correct! The missing number is 4!",
        "wrong_statement":"The answer is incorrect!",
    },
    "3":{
        "practice_id": "3",
        "title": "Practice Play",
        "subtitle": "Using the strategies you just learned, let's practice!",
        "text": "Which numbers CANNOT go into the highlighted box? Select all that apply.",
        "image": "../static/images/practice3.png",
        "button_text": "Play",
        "next_practice": "end",
        "button_submit_text": "Submit",
        "question":"1,2,3,4,5,6,7,8,9",
        "answer": "1,2,3,6,7,8,9",
        "correct_statement":"Correct! The only numbers that could go into this box is either a 4 or 5, depending on the rest of the grid. All other numbers overlap within the subgrid and/or the row.",
        "wrong_statement":"The answer is incorrect!",
    },
}

rule_data = {
    "1":{
        "rule_id": "1",
        "title": "Rules & Strategies", 
        "text": "The objective of Sudoku is to ensure that there is one of each number 1 through 9 in each row, column, and 3x3 subgrid within a 9x9 grid. There will be a few numbers already inputted to help you get started.",
        "image": "../static/images/image1.png",
        "button_text": "Next Step",
        "next_rule": "2"
    },
    "2":{
        "rule_id": "2",
        "title": "Rules & Strategies", 
        "text": "Step 1: First analyze the grid. Start with either the row, column, or 3x3 grid that has the most numbers already filled in. Let's start with this one.",
        "image": "../static/images/image2.png",
        "button_text": "Next Step",
        "next_rule": "3"
    },
    "3":{
        "rule_id": "3",
        "title": "Rules & Strategies", 
        "text": "Step 2: In this column, all of the numbers are filled in except for 4. Therefore, the number 4 will go into the missing box.",
        "image": "../static/images/image3.png",
        "button_text": "Next Step",
        "next_rule": "4"
    },
    "4":{
        "rule_id": "4",
        "title": "Rules & Strategies", 
        "text": "Step 3: The trick with Sudoku is to make sure that you are looking at the bigger picture to avoid mistakes. There may be a few possibilites for a box that you will not be able to narrow down until you figure out other parts of the puzzle.",
        "image": "../static/images/image4.png",
        "button_text": "Next Step",
        "next_rule": "5"
    },
    "5":{
        "rule_id": "5",
        "title": "Rules & Strategies", 
        "text": "Step 4: For example, in this box the 6, 8, and 9 are missing. We don't know the exact location of the 6 and 8, so we can make a small note in those boxes. But, since the 9 is already in one of the overlapping columns, we do know the exact location of the 9 in this subgrid.",
        "image": "../static/images/image5.png",
        "button_text": "Next Step",
        "next_rule": "6"
    },
    "6":{
        "rule_id": "6",
        "title": "Rules & Strategies", 
        "text": "And that's it! You make notes and slowly fill in each of the boxes with the numbers until it is all filled in. Time to Practice.",
        "image": "../static/images/image6.png",
        "button_text": "Practice Play",
        "next_rule": "end"
    },
}

logs = []

# ROUTES
@app.route('/')
def welcome(): 
    return render_template('homepage.html') 

@app.route('/rules/<rule_id>')
def rules(rule_id): 
    rule = rule_data[rule_id]
    t = datetime.datetime.now()
    log = {"rule_id": rule_id, "time": t}
    logs.append(log)
    print(log)
    return render_template('rules.html', rule=rule) 

@app.route('/play')
def add_data(id=None): 
    return render_template('play.html') 

@app.route('/practice/<practice_id>', methods=['GET', 'POST'])
def practice(practice_id): 
    practice = practice_data[practice_id]
    return render_template('practice.html', practice = practice) 

@app.route('/playgame')
def playgame():
    return render_template('grid.html', grid_answers = grid_answers)

@app.route('/submit_data', methods=['GET', 'POST'])
def submit_data():

    global grid_answers
    global score
    global users_answers
    score = 17

    json_data = request.get_json()

    user_input_0 = json_data["0"]
    input0_val = user_input_0["input"]

    user_input_1 = json_data["1"]
    input1_val = user_input_1["input"]

    user_input_2 = json_data["2"]
    input2_val = user_input_2["input"]

    user_input_3 = json_data["3"]
    input3_val = user_input_3["input"]

    user_input_4 = json_data["4"]
    input4_val = user_input_4["input"]

    user_input_5 = json_data["5"]
    input5_val = user_input_5["input"]

    user_input_6 = json_data["6"]
    input6_val = user_input_6["input"]

    user_input_7 = json_data["7"]
    input7_val = user_input_7["input"]

    user_input_8 = json_data["8"]
    input8_val = user_input_8["input"]

    user_input_9 = json_data["9"]
    input9_val = user_input_9["input"]

    user_input_10 = json_data["10"]
    input10_val = user_input_10["input"]

    user_input_11 = json_data["11"]
    input11_val = user_input_11["input"]

    user_input_12 = json_data["12"]
    input12_val = user_input_12["input"]

    user_input_13 = json_data["13"]
    input13_val = user_input_13["input"]

    user_input_14 = json_data["14"]
    input14_val = user_input_14["input"]

    user_input_15 = json_data["15"]
    input15_val = user_input_15["input"]

    user_input_16 = json_data["16"]
    input16_val = user_input_16["input"]

    if input0_val != grid_answers["0"]["input"]:
        score -= 1

    if input1_val != grid_answers["1"]["input"]:
        score -= 1
    
    if input2_val != grid_answers["2"]["input"]:
        score -= 1

    if input3_val != grid_answers["3"]["input"]:
        score -= 1

    if input4_val != grid_answers["4"]["input"]:
        score -= 1

    if input5_val != grid_answers["5"]["input"]:
        score -= 1

    if input6_val != grid_answers["6"]["input"]:
        score -= 1

    if input7_val != grid_answers["7"]["input"]:
        score -= 1

    if input8_val != grid_answers["8"]["input"]:
        score -= 1

    if input9_val != grid_answers["9"]["input"]:
        score -= 1

    if input10_val != grid_answers["10"]["input"]:
        score -= 1
    
    if input11_val != grid_answers["11"]["input"]:
        score -= 1

    if input12_val != grid_answers["12"]["input"]:
        score -= 1

    if input13_val != grid_answers["13"]["input"]:
        score -= 1

    if input14_val != grid_answers["14"]["input"]:
        score -= 1

    if input15_val != grid_answers["15"]["input"]:
        score -= 1

    if input16_val != grid_answers["16"]["input"]:
        score -= 1


    users_answers = {
        "0": {
            "input": input0_val,
        },
    
        "1": {
            "input": input1_val,
        },
    
        "2": {
            "input": input2_val,
        },
    
        "3": {
            "input": input3_val,
        },
    
        "4": {
            "input": input4_val,
        },
    
        "5": {
            "input": input5_val,
        },
    
        "6": {
            "input": input6_val,
        },
    
        "7": {
            "input": input7_val,
        },
    
        "8": {
            "input": input8_val,
        },

        "9": {
            "input": input9_val,
        },
    
        "10": {
            "input": input10_val,
        },
    
        "11": {
            "input": input11_val,
        },
    
        "12": {
            "input": input12_val,
        },
    
        "13": {
            "input": input13_val,
        },
    
        "14": {
            "input": input14_val,
        },
    
        "15": {
            "input": input15_val,
        },
    
        "16": {
            "input": input16_val,
        },
    }
   
    return jsonify(data=score, users_answers = users_answers)

@app.route('/finalscore')
def finalscore():
    return render_template('answers.html', score = score, users_answers = users_answers, grid_answers = grid_answers)

if __name__ == '__main__':
   app.run(debug = True)

