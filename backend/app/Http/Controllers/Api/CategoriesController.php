<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\CategoriesRepositoryInterface;

class CategoriesController extends Controller
{
    protected CategoriesRepositoryInterface $categoriesRepository;
    protected Request $request;

    public function __construct(CategoriesRepositoryInterface $categoriesRepository, Request $request)
    {
        $this->categoriesRepository = $categoriesRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->categoriesRepository->findAll($this->request->all());

        return response()->json($payload);
    }

    public function show($id)
    {
        $payload = $this->categoriesRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->categoriesRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->categoriesRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->categoriesRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->categoriesRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

