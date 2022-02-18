<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\ProductsRepositoryInterface;

class ProductsController extends Controller
{
    protected ProductsRepositoryInterface $productsRepository;
    protected Request $request;

    public function __construct(ProductsRepositoryInterface $productsRepository, Request $request)
    {
        $this->productsRepository = $productsRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->productsRepository->findAll($this->request->all());

        return response()->json($payload);
    }

    public function show($id)
    {
        $payload = $this->productsRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->productsRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->productsRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->productsRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->productsRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

