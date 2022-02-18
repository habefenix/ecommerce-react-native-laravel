<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\PromocodesRepositoryInterface;

class PromocodesController extends Controller
{
    protected PromocodesRepositoryInterface $promocodesRepository;
    protected Request $request;

    public function __construct(PromocodesRepositoryInterface $promocodesRepository, Request $request)
    {
        $this->promocodesRepository = $promocodesRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->promocodesRepository->findAll($this->request->all());

        return response()->json($payload);
    }

    public function show($id)
    {
        $payload = $this->promocodesRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->promocodesRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->promocodesRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->promocodesRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->promocodesRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

