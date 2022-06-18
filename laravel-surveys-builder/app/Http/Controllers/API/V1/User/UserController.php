<?php

namespace App\Http\Controllers\Api\V1\User;
use App\Http\Controllers\Controller;


use Illuminate\Http\Request;
use Validator;

use App\Models\Answer;
use App\Models\Survey;

use Symfony\Component\HttpFoundation\Response;



class UserController extends Controller
{
    
   public function submitAnswers(Request $request)
   {

       
       $validator = Validator::make($request->all(), [
           'answer' => 'required|string|min:2|max:5000',     
           'survey_name' => 'string',
       
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
    
       $answer = new Answer;

       $answer->answer = $request->answer;
       $answer->survey_id = $survey_id;
       $answer->save();

       return response()->json([
           'message' => 'Answers submitted successfully',
           'answer' => $answer
       ], Response::HTTP_OK);
   }

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

}
