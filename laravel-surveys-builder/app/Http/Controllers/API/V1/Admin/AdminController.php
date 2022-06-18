<?php

namespace App\Http\Controllers\Api\V1\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\Answer;
use App\Models\Survey;
use App\Models\Type;
use App\Models\Question;
use Symfony\Component\HttpFoundation\Response;


class AdminController extends Controller
{
    public function createSurvey(Request $request)
    {   
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:100|unique:surveys',            
        ]);
 
        if($validator->fails()) {
            return response()->json(["message" => "Survey exists already ! Change the name please !"]);
        }
 
     
        $survey = new Survey;
 
        $survey->name = $request->name;
        $survey->number_of_questions = 0;
        
        $survey->save();
 
        return response()->json([
            'message' => 'Survey created successfully',
            'survey' => $survey
        ], Response::HTTP_OK);
    }

    public function addQuestion(Request $request)
    {
     
        $validator = Validator::make($request->all(), [

            'title' => 'required|string',
            'content' => 'required|string|min:2|max:5000',     
            'survey_name' => 'required|string',
            'type' => 'required|string',
        
        ]);
 
        if($validator->fails()) {
            return response()->json(["message" => "failed to submit answer"]);
        }
 
        $record = Survey::where("name","=",$request->survey_name)->get();
         
        if(count($record) == 0){
            return response()->json([
                'message' => 'There is no such survey!',
                
            ]);
        }
        
        $survey_id = json_decode($record,true)[0]["id"];

        $record = Type::where("name","=",$request->type)->get();
         
        if(count($record) == 0){
            return response()->json([
                'message' => 'There is no such type!',
                
            ]);
        }

        $type_id = json_decode($record,true)[0]["id"];
     
        $question = new Question;
 
        $question->title = $request->title;
        $question->content = $request->content;
        $question->survey_id = $survey_id;
        $question->type_id = $type_id;
        $question->save();
 
        return response()->json([
            'message' => 'Question added successfully',
            'question' => $question
        ], Response::HTTP_OK);
    }
 
    public function getSurveys(){
        
        $surveys=Survey::all();
        return $surveys;
    }
}
