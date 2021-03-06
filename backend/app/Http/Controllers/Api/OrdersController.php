<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\OrdersRepositoryInterface;

class OrdersController extends Controller
{
    protected OrdersRepositoryInterface $ordersRepository;
    protected Request $request;

    public function __construct(OrdersRepositoryInterface $ordersRepository, Request $request)
    {
        $this->ordersRepository = $ordersRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->ordersRepository->findAll($this->request->all());

        return response()->json($payload);
    }

    public function show($id)
    {
        $payload = $this->ordersRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->ordersRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->ordersRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->ordersRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->ordersRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

