from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import *
from .serializers import *
from django_filters import rest_framework as filters


class PodcastViewSet(ReadOnlyModelViewSet):
    queryset = Podcast.objects.all()
    serializer_class = PodcastSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('category',)


class ProductFilter(filters.FilterSet):
    class Meta:
        model = Podcast
        fields = ('category',)


class RandomPodcastsViewSet(ReadOnlyModelViewSet):
    queryset = Podcast.objects.order_by('?')[:3]
    serializer_class = PodcastSerializer


class CategoryViewSet(ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class AuthorViewSet(ReadOnlyModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
