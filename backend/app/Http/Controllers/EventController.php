<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        try {
            $events = Event::all();
            return response()->json(["ok" => true, "events" => $events], 200);
        } catch (\Throwable $th) {
            return response()->json(["ok" => false, "message" => $th->getMessage()], 400);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): JsonResponse
    {
        $validate = $request->validate([
            "title" => "required|string|max:255",
            "notes" => "required|string|max:512",
            "start_date" => "required|date",
            "end_date" => "required|date|after:start_date",
        ]);

        try {
            $newEvent = Event::create([
                "title" => $validate["title"],
                "notes" => $validate["notes"],
                "start_date" => $validate["start_date"],
                "end_date" => $validate["end_date"],
                "user_id" => $request->user()->id,
            ]);

            return response()->json(["ok" => true, "event" => $newEvent], 201);
        } catch (\Throwable $th) {
            return response()->json(["ok" => false, "message" => $th->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): JsonResponse
    {
        try {
            $event = Event::findOrFail($id);
            return response()->json(["ok" => true, "event" => $event], 200);
        } catch (\Throwable $th) {
            return response()->json(["ok" => false, "message" => $th->getMessage()], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): JsonResponse
    {
        $validate = $request->validate([
            "title" => "sometimes|string|max:255",
            "notes" => "sometimes|string|max:512",
            "start_date" => "sometimes|date",
            "end_date" => "sometimes|date|after:start_date",
        ]);

        try {
            $event = Event::findOrFail($id);
            $event->update([
                "title" => $validate["title"],
                "notes" => $validate["notes"],
                "start_date" => $validate["start_date"],
                "end_date" => $validate["end_date"],
            ]);
            return response()->json(["ok" => true, "event" => $event], 200);
        } catch (\Throwable $th) {
            return response()->json(["ok" => false, "message" => $th->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): JsonResponse
    {
        try {
            $event = Event::findOrFail($id);
            $event->delete();
            return response()->json(["ok" => true, "message" => "Event deleted successfully"], 200);
        } catch (\Throwable $th) {
            return response()->json(["ok" => false, "message" => $th->getMessage()], 400);
        }
    }
}
